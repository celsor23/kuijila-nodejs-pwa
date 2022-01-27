const User = require("../models/users");
const VerificationToken = require("../models/verification_tokens");
const sgMail = require("@sendgrid/mail");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

// "https://kuijila.herokuapp.com/inscreva-se/conta"

exports.getInscrevasePage = (req, res, next) => {
  res.render("inscreva-se", {pathname: req.baseUrl});
};

exports.postInscrevasePage = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;

  try {

    const foundUser = await User.findOne({email: email});

    if (foundUser) {
      throw new Error("A user with this email already exists");
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password,saltRounds);

    const user = new User({
      nome: name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await user.save();
    console.log(`[postInscrevasePage] email: ${user.email} | userId: ${user._id}`);

    const generated_verification_jwt = jwt.sign(_.pick(user, ["_id"]), process.env.JWT_VERIFICATION_EMAIL_SECRET, {
      expiresIn: 15*60
    });

    
    const verificationToken = new VerificationToken({
      userId: user._id,
      token: generated_verification_jwt
    });
    
    await verificationToken.save();

    const emailVerificationLink = `${req.protocol}://${req.get("host")}/inscreva-se/verificar?conta=${generated_verification_jwt}`;
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      from: "no-reply@re-memo.com",
      to: email,
      subject: "Verifica o seu email para o Kuijila",
      html: `
      <p>Olá ${name},</p>
      <p>Clique no link abaixo para verificar o seu endereço de email.</p>
      <p>${emailVerificationLink}</p>
      <p>Se você não pediu para verificar esse endereço de email, pode ignorar este email.</p>
      <p>Obrigado,</p>
      <p>Sua equipe do Kuijila</p>
      `
    });
    console.log("Email sent!");
    res.render("verificar", {user: _.pick(user, ["email", "_id"])});
  } catch (error) {
    console.log(error);
  }
};

exports.getVerificarEmailLinkRoute = async (req, res, next) => {
  const token = req.query.conta;
  const decoded_token = jwt.verify(token, process.env.JWT_VERIFICATION_EMAIL_SECRET);

  console.log(decoded_token);

  try {
    const verification_token = await VerificationToken.findOneAndDelete({ userId: decoded_token._id });
    console.log(verification_token);

    const foundUser = await User.findById({ _id: decoded_token._id});
    console.log(foundUser);

    if (!foundUser) {
      throw new Error("A user with this id does not exist");
    }

    foundUser.isVerified = true;
    await foundUser.save();

    res.render("inscreva-se__conta", {pathname: req.baseUrl, userId: foundUser._id});
  } catch (error) {
    console.log(error);
  }

};

exports.postVerificarPage = async (req, res, next) => {
  const userId = req.body.userId;
  const email = req.body.email;

  console.log(`[postVerificarPage] email: ${email} | userId: ${userId}`);

  try {
    const user = await User.findById(userId);

    const generated_verification_jwt = jwt.sign(_.pick(user, ["_id"]), process.env.JWT_VERIFICATION_EMAIL_SECRET, {
      expiresIn: 15*60,
    });

    const foundVerificationToken = await VerificationToken.findOneAndUpdate( {userId: userId}, { token: generated_verification_jwt});

    const emailVerificationLink = `${req.protocol}://${req.get("host")}/inscreva-se/verificar?conta=${generated_verification_jwt}`;
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    await sgMail.send({
      from: "no-reply@re-memo.com",
      to: email,
      subject: "Verifica o seu email para o Kuijila",
      html: `
      <p>Olá ${user.nome},</p>
      <p>Clique no link abaixo para verificar o seu endereço de email.</p>
      <p>${emailVerificationLink}</p>
      <p>Se você não pediu para verificar esse endereço de email, pode ignorar este email.</p>
      <p>Obrigado,</p>
      <p>Sua equipe do Kuijila</p>
      `
    });
    console.log("Email sent!");
    res.render("verificar", {user: _.pick(user, ["email", "_id"])});
  } catch (error) {
    console.log(error);
  }
};

exports.getInscrevaseContaPage = (req, res, next) => {
  res.render("inscreva-se__conta", {pathname: req.baseUrl});
};

exports.postInscrevaseContaPage = async (req, res, next) => {
  const conta = req.body.conta;
  const ensino = req.body.ensino;
  const userId = req.body.userId;

  try {

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("[postInscrevaseContaPage] Could not find a user with this id");
    }

    if (user.ensino !== ensino) {
      user.ensino = ensino;
    }

    if (conta === "estudante") {
      await user.save();
      res.render("precario", {pathname: req.baseUrl, userId});
    } else if (conta === "tutor") {
      user.conta = conta;
      await user.save();
      res.render("pagamento", {pathname: req.baseUrl, userId});
    }
  } catch (error) {
    console.log(error);
  }
};

exports.getInscrevasePrecarioPage = (req, res, next) => {
  res.render("precario", {pathname: req.baseUrl});
};

exports.postInscrevasePrecarioPage = async (req, res, next) => {
  const plano = req.body.plano;
  const userId = req.body.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("[postInscrevasePrecarioPage] Could not find a user with this id");
    }

    user.plano = plano;
    await user.save();

    res.render("pagamento", {pathname: req.baseUrl, userId});
  } catch (error) {
    console.log(error);
  }
};

exports.getInscrevasePagamentoPage = (req, res, next) => {
  res.render("pagamento", {pathname: req.baseUrl});
};