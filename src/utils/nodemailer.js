import nodmailer from 'nodemailer'


export const transporter = nodmailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
        user: 'usuario@gmail.com',
        pass: 'kjvzuthxqbpdmxny',
    },
})