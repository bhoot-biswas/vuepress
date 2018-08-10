import axios from 'axios';

const apiUrl = 'http://localhost/wp/dev/wp-json/buddypress/v1/activity';

export function getAllActivities(cb) {
  axios.get(apiUrl).then((response) => {
      cb(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export function addActivity({ text }, cb) {
  axios.post(apiUrl, {
      content: text,
    })
    .then(function(response) {
      cb(response.data[0]);
      console.log(response.data[0]);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function removeActivity(payload, cb) {
  axios.delete(apiUrl + '/' + payload.id).then(function(response) {
      cb(payload);
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
}

console.log('api loaded');
