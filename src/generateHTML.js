const createHTML =(data)=>{
  let cardarray = [];
    for(let i = 1; i < data.length; i ++){
        let newCard;
        switch(data[i].getRole()){
        case "Engineer": newCard = ` 
        <div  class="col-lg-3 mb-4">
        <div class="card">
        <img class="card-img-top" src="" alt="">
        <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">
            ${data[i].getRole()}
            </p>
            <ul>
            <li>ID: ${data[i].getID()}</li>
            <li>Email:<a href ="mailto:${data[i].getEmail()}"> ${data[i].getEmail()}</a></li>
            <li>GitHub:<a href ="https://github.com/${data[i].getGitHub()}">${data[i].getGitHub()}</a></li>
        </ul>
        </div>
    </div>
    </div>`
    cardarray.push(newCard)
    break
    case "Intern": newCard = `  
    <div  class="col-lg-3 mb-4">
    <div class="card">
    <img class="card-img-top" src="" alt="">
    <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">
        ${data[i].getRole()}
        </p>
        <ul>
        <li>ID: ${data[i].getID()}</li>
        <li>Email:<a href ="mailto:${data[i].getEmail()}"> ${data[i].getEmail()}</a></li>
        <li>School: ${data[i].getSchool()}</li>
    </ul>
    </div>
</div>
</div>`
cardarray.push(newCard)
break
        };
    };
    return `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row" class="Header">
            <h1 class="col-lg-12">
                MY TEAM
            </h1>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-3 mb-4">
                <div class="card">
                    <img class="card-img-top" src="" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${data[0].name}</h5>
                        <p class="card-text">
                        ${data[0].getRole()}
                        </p>
                        <ul>
                        <li> ID: ${data[0].getID()}</li>
                        <li>Email:<a href = "mailto:${data[0].getEmail()}"> ${data[0].getEmail()}</a></li>
                        <li>Office Number:${data[0].officeNumber}</li>
                    </ul>
                    </div>
                </div>
                </div>
                ${cardarray}
            </div>
        </div>




        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
</body>

</html>
`
}

module.exports = createHTML;