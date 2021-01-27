'use strict';

// Selectors
const btnFacebook = document.querySelector('.btn-facebook');
const btnAngular = document.querySelector('.btn-angular');
const btnVue = document.querySelector('.btn-vue');
const githubProfiles = document.querySelector('.profile-container');
const filterInput = document.querySelector('.search-input');

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

// Filter Tasks
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
