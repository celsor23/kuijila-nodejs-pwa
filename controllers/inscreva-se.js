const { getAuth, Auth } = require("firebase-admin/auth");
const sgMail = require("@sendgrid/mail");

exports.getInscrevasePage = (req, res, next) => {
  res.render("inscreva-se", {pathname: req.baseUrl});
};

exports.postInscrevasePage = async (req, res, next) => {
  const auth = getAuth(req.firebaseApp);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;

  try {
    const userRecord = await auth.createUser({
      displayName: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber
    });
    const emailVerificationLink = await auth.generateEmailVerificationLink(email,{
      url: "https://kuijila.herokuapp.com/inscreva-se/conta"
    });
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail.send({
      from: "no-reply@re-memo.com",
      to: email,
      subject: "Verifiqa o seu email para o Kuijila",
      html: `
      <p>Olá ${name},</p>
      <p>Clique no link abaixo para verificar o seu endereço de email.</p>
      <p>${emailVerificationLink}</p>
      <p>Se você não pediu para verificar esse endereço de email, pode ignorar este email.</p>
      <p>Obrigado,</p>
      <p>Sua equipe do Kuijila</p>
      `
    })
    console.log("Email sent!");
    res.render("verificar", {user: userRecord});
  } catch (error) {
    console.log(error);
  }
};