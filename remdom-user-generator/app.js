class RandomUser {
    constructor() { }
    static fetchFromAPI() {
        let URL = 'https://randomuser.me/api/';
        fetch(URL)
            .then(response => response.json())
            .then(data => RandomUser.renderUserData(data))
            .catch(error => alert(error));
    }

    static renderUserData(data) {
        // console.log(data)
        let user = data.results[0];
        let card = document.querySelector('.card');
        card.innerHTML = `
        <div class="card-head">
            <p><i class="fa-solid fa-envelope fa-fw"> </i>Email</p>
            <div class="user-img">
                <img src="${user.picture.large}" alt="user-img">
            </div>
        </div>
        <div class="card-body">
            <div class="user-address-dets">
                <div>
                    <span>${user.location.street.number}</span><span>${user.location.street.name}</span>
                </div>
                <div>
                    <span>
                    ${user.location.postcode}
                    </span>
                    <span>
                    ${user.location.city}</span>
                </div>
                <div>
                <span>
                ${user.location.state}
                </span>
                <span>
                ${user.location.country}
                </span>
                </div>
            </div>
            <div class="user-name-dets">
                <div>
                    <h3>
                        <span>
                        ${user.name.title}
                        </span>
                        <span>
                        ${user.name.first}
                        </span>
                        <span>
                        ${user.name.last}
                        </span>
                        <sapn>
                        ${user.dob.age}
                        </sapn>
                    </h3>
                </div>
                <div>
                    <p>
                    ${user.location.state},
                    ${user.location.country}.
                    </p>
                </div>
            </div>
        </div>  
        <div class="card-footer">
            <div class="user-phone">
                <i class="fa-solid fa-phone fa-fw"></i>
                ${user.phone}
            </div>
            <div class="user-phone">
                <i class="fa-solid fa-mobile fa-fw"></i>
                ${user.cell}
            </div>
        </div>`;
    }

}

document.querySelector('.new-user-btn').addEventListener('click', () => {
    RandomUser.fetchFromAPI();
})
RandomUser.fetchFromAPI();