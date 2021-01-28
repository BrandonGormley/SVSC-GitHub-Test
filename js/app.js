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

  // Fetching addiitonal data from user
  const profileCards = document.querySelectorAll('.profile-card');
  profileCards.forEach(profile => {
    profile.addEventListener('click', e => {
      let user = e.target.textContent;
      console.log(user);
      fetch(`https://api.github.com/users/${user}`)
        .then(res => res.json())
        .then(user => {
          let userData = `
          <li>Name: ${user.name}</li>
          <li>Repos: ${user.repos_url}</li>
          <li>Followers: ${user.followers}</li>
          <li>Account Started: ${user.created_at}</li>
        `;
          profileInfo.innerHTML = userData;
        });
    });
  });
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
