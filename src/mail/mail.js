import dotenv from "dotenv";

dotenv.config();
const HOST = process.env.host;

function forgotMessage(emailPath) {
  return `<div><br/>
              <a href="${
                HOST + "/change_password/" + emailPath
              }">change password</a>
            </div>`;
}

function registrationMessage(emailPath) {
  return `<div><br/>
              <a href="${
                HOST + "/verification/" + emailPath
              }">verification</a>
            </div>`;
}

export { forgotMessage, registrationMessage };
