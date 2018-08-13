import axios from 'axios';

const apiUrl = 'http://localhost/wp/dev/wp-json/buddypress/v1/activity';

export function getAllActivities(params, cb) {
  axios.get(apiUrl, { params }).then((response) => {
    cb(response.data);
  });
}

export function addActivity({ text }, cb) {
  axios.post(apiUrl, { content: text }).then(response => cb(response.data[0]));
}

export function editActivity({ activity, value }, cb) {
  axios.patch(`${apiUrl}/${activity.id}`, { id: activity.id, type: 'activity_update', content: value }).then(() => {
    cb(activity, value);
  });
}

export function removeActivity(payload, cb) {
  axios.delete(`${apiUrl}/${payload.id}`).then(() => cb(payload));
}
