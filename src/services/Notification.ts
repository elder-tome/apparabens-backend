import PersonController from "../controllers/PersonController";
import { CronJob } from 'cron'
import IMail from './IMail';

export default class Notification {

  start(mail: IMail) {

    function getAge(birthYearString: string, currentYear: number) {
      const birthYear = Number(birthYearString);
      return currentYear - birthYear;
    }

    new CronJob('0 0 0 * * *', async function () {

      const birthday = await new PersonController().birthday();

      if (birthday) {

        birthday.forEach(person => (
          mail.sendMail(
            mail.getUser(),
            person.user.email,
            `Aniversário de ${person.name}`,
            `<figure style="width:300px">` +
              `<img src=${person.image_url} alt="foto" style="width:100%; height:300px">` +
              `<figcaption style="text-align:center; color:#3a3a3a">${person.name} faz ${getAge(person.date.year, new Date().getFullYear())} anos hoje, deseje parabéns para ele(a)</figcaption>` +
            `</figure>`
          )
        ));

      }

    }, null, true, 'America/Fortaleza').start();

  }

}
