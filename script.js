

async function foo() {

    try {


        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data1 = await res.json();

        const nav = document.createElement("nav");
        nav.innerHTML = `<nav class="navbar bg-body-tertiar">
          <div class="container-fluid">
         <span class="navbar-bran mb-0 h3">Users list</span>
            </div>
             </nav>`
             document.body.append(nav);
             const section = document.createElement("section");
             for (var i = 0; i < data1.length; i++) {
            //console.log(data1[i])


            const div = document.createElement("div");
            div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
          <div class="cool">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><b>Name : ${data1[i].name}</b></h5>
                <p class="card-text">Email: ${data1[i].email}</p>
                <p class="card-text">street: ${data1[i].address.street}</p>
                <p class="card-text">City: ${data1[i].address.city}</p>
              </div>
            </div>
          </div>
          </div>`;
            section.append(div);
        }
        document.body.append(section);

        //console.log(result)
    } catch (error) {
        console.log(error)
    }
}
foo();  