/**
 * 1. Create an array with the emails from the `data` variable
 *    using one of the built in array loops (choose the one you want)
 *    that have a length of 22 characters or more.
 *
 * 2. Return the array of emails that have 22 characters or more.
 */
function exercise21() {
    const data = [
        [
            {
                name: 'Livvyy Semaine',
                email: 'lsemaine0@webnode.com',
            },
            {
                name: 'Bevvy Semark',
                email: 'bsemark1@netvibes.com',
            },
            {
                name: 'Quill Learned',
                email: 'qlearned2@imageshack.us',
            },
            {
                name: 'Maren OIlier',
                email: 'moilier3@foxnews.com',
            },
            {
                name: 'Julietta Fairy',
                email: 'jfairy4@vkontakte.ru',
            },
        ],
        [
            {
                name: 'Guilbert Kelner',
                email: 'gkelner5@squarespace.com',
            },
            {
                name: 'Fenelia Dominiak',
                email: 'fdominiak6@netvibes.com',
            },
            {
                name: 'Leshia Wort',
                email: 'lwort7@usnews.com',
            },
            {
                name: 'Verena Drillot',
                email: 'vdrillot8@rediff.com',
            },
            {
                name: 'Reggy Riby',
                email: 'rriby9@vinaora.com',
            },
            {
                name: 'Ettore Habgood',
                email: 'ehabgooda@slashdot.org',
            },
            {
                name: 'Winnah Meriton',
                email: 'wmeritonb@arstechnica.com',
            },
            {
                name: 'Marris Hans',
                email: 'mhansc@pbs.org',
            },
            {
                name: 'Karly Robertsen',
                email: 'krobertsend@4shared.com',
            },
        ],
        [
            {
                name: 'Terrance Croad',
                email: 'tcroade@360.cn',
            },
            {
                name: 'Pren Havesides',
                email: 'phavesidesf@army.mil',
            },
            {
                name: 'Jacklyn Codrington',
                email: 'jcodringtong@photobucket.com',
            },
            {
                name: 'Aubry Peare',
                email: 'apeareh@bluehost.com',
            },
            {
                name: 'Faun Muckley',
                email: 'fmuckleyi@washington.edu',
            },
            {
                name: 'Nerta Autry',
                email: 'nautryj@bloomberg.com',
            },
        ],
    ];

    const emails = [];

    for (let index = 0; index < data.length; index++) {
        const objects = data[index];
        objects.forEach(element => {
            if(element.email.length >= 22)
            emails.push(element.email);
        });
    }
    return emails;
}


module.exports = exercise21;
