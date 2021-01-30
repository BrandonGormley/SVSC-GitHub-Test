'use strict';

// Selectors
const btnFacebook = document.querySelector('.btn-facebook');
const btnAngular = document.querySelector('.btn-angular');
const btnVue = document.querySelector('.btn-vue');
const githubProfiles = document.querySelector('.profile-container');
const filterInput = document.querySelector('.search-input');
const profileInfo = document.querySelector('.profile-info');

// Event Listeners
btnFacebook.addEventListener('click', getFacebookProfiles);
btnAngular.addEventListener('click', getAngularProfiles);
btnVue.addEventListener('click', getVueProfiles);
filterInput.addEventListener('keyup', filterProfiles);

// Fetch Facebook Profiles
async function getFacebookProfiles() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/facebook/public_members`
    );
    const profiles = await response.json();

    let output = ``;
    profiles.forEach(async profile => {
      output += `
        <div class="profile-card">
          <h3>${profile.login}</h3>
          <img src="${profile.avatar_url}"></img>
        </div>
      `;
      githubProfiles.innerHTML = output;
    });
  } catch (err) {
    console.log(`Looks like we have an error: ${err}`);
  }
  fetchAdditionalInformation();
}

// Fetch Angular Profiles
async function getAngularProfiles() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/angular/public_members`
    );
    const profiles = await response.json();

    let output = ``;
    profiles.forEach(async profile => {
      output += `
        <div class="profile-card">
          <h3>${profile.login}</h3>
          <img src="${profile.avatar_url}"></img>
        </div>
      `;
      githubProfiles.innerHTML = output;
    });
  } catch (err) {
    console.log(`Looks like we have an error: ${err}`);
  }
  fetchAdditionalInformation();
}

// Fetch Angular Profiles
async function getVueProfiles() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/vuejs/public_members`
    );
    const profiles = await response.json();

    let output = ``;
    profiles.forEach(async profile => {
      output += `
        <div class="profile-card">
          <h3>${profile.login}</h3>
          <img src="${profile.avatar_url}"></img>
        </div>
      `;
      githubProfiles.innerHTML = output;
    });
  } catch (err) {
    console.log(`Looks like we have an error: ${err}`);
  }
  fetchAdditionalInformation();
}

// Filter User Profiles
function filterProfiles(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.profile-card').forEach(profile => {
    const name = profile.textContent;
    if (name.toLowerCase().indexOf(text) != -1) {
      profile.style.display = 'block';
    } else {
      profile.style.display = 'none';
    }
  });
}

///////////////////////////////////////////////
// Fetching addiitonal data from user
//////////////////////////////////////////////
function fetchAdditionalInformation() {
  const profileCards = document.querySelectorAll('.profile-card');
  profileCards.forEach(profile => {
    profile.addEventListener('click', e => {
      let userName = profile.firstElementChild.textContent;
      fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json())
        .then(user => {
          let userData = `
            <li class="list-item-info">Name: ${user.name}</li>
            <li class="list-item-info">Repos: ${user.public_repos}</li>
            <li class="list-item-info">Repos URL: <a href="${user.repos_url}">User Repos</a></li>
            <li class="list-item-info">Followers: ${user.followers}</li>
            <li class="list-item-info">Account Started: ${user.created_at}</li>
          `;
          profileInfo.innerHTML = userData;
        });
    });
  });
}
