//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe


//Wayne Barnett     ounder & CEO      wayne-barnett-founder-ceo.jpg
//Angela Caroll     Chief Editor      angela-caroll-chief-editor.jpg
//Walter Gordon     Office Manager    walter-gordon-office-manager.jpg
//Angela Lopez      Social Media      Manager  angela-lopez-social-media-manager.jpg
//Scott Estrada     Developer         scott-estrada-developer.jpg
//Barbara Ramos     Graphic Designer  barbara-ramos-graphic-designer.jpg

const teamMembers = [
     
    {
        Name : "Wayne Barnett ",
        Role : "Founder & CEO  ",
        Picture : "wayne-barnett-founder-ceo.jpg",



    },

    {
        Name : "Angela Caroll",
        Role : "Chief Editor",
        Picture : "angela-caroll-chief-editor.jpg",



    },
    {
        Name : "Walter Gordon ",
        Role : "Office Manager",
        Picture : " walter-gordon-office-manager.jpg",



    },
    {
        Name : "Angela Lopez ",
        Role : "Social Media ",
        Picture : " Manager  angela-lopez-social-media-manager.jpg",



    },
    {
        Name : "Scott Estrada ",
        Role : "  Developer ",
        Picture : " scott-estrada-developer.jpg",



    },
    {
        Name : "Barbara Ramos ",
        Role : "Graphic Designer ",
        Picture : "barbara-ramos-graphic-designer.jpg",

    },






]


for(key in teamMembers){
    console.log(key, teamMembers[key])

}


  

