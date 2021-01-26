'use strict';

// Selectors
const btnFacebook = document.querySelector('.btn-facebook');
const btnAngular = document.querySelector('.btn-angular');
const btnVue = document.querySelector('.btn-vue');
const githubProfiles = document.querySelector('.profile-container');

// Event Listeners
btnFacebook.addEventListener('click', getFacebookProfiles);
btnAngular.addEventListener('click', getAngularProfiles);
btnVue.addEventListener('click', getVueProfiles);

// Fetch Facebook Profiles
async function getFacebookProfiles() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/facebook/public_members`
    );
    const profiles = await response.json();

    let output = ``;
    profiles.forEach(async profile => {
      console.log(profile);
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
      console.log(profile);
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
      console.log(profile);
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
}
