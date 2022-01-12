const sgMail = require("@sendgrid/mail");

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
    // const userRecord = await auth.createUser({
    //   displayName: name,
    //   email: email,
    //   password: password,
    //   phoneNumber: phoneNumber
    // });

    // if (userRecord) {
    //   const doc = await getFirestore(req.firebaseApp).collection("users").add(userRecord.toJSON());
    //   console.log(doc);
    // }

    // const emailVerificationLink = await auth.generateEmailVerificationLink(email,{
    //   url: "http://localhost:8080/inscreva-se/conta"
    // });
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail.send({
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
    res.render("verificar", {user: userRecord});
  } catch (error) {
    console.log(error);
  }
};

exports.getInscrevaseContaPage = (req, res, next) => {
  res.render("inscreva-se__conta", {pathname: req.baseUrl});
};

exports.postInscrevaseContaPage = (req, res, next) => {
  const conta = req.body.conta;
  const ensino = req.body.ensino;
  if (conta === "estudante") {
    res.render("precario", {pathname: req.baseUrl});
  } else if (conta === "tutor") {
    res.render("pagamento", {pathname: req.baseUrl});
  }
};

exports.getInscrevasePrecarioPage = (req, res, next) => {
  res.render("precario", {pathname: req.baseUrl});
};

exports.postInscrevasePrecarioPage = (req, res, next) => {
  const plano = req.body.plano;
  res.redirect("/inscreva-se/conta/pagamento");
};

exports.getInscrevasePagamentoPage = (req, res, next) => {
  res.render("pagamento", {pathname: req.baseUrl});
};