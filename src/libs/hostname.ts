// https://render.com/docs/pull-request-previews#how-pull-request-previews-work
const {
  REACT_APP_HOSTNAME_OVERRIDE,
  REACT_APP_IS_PULL_REQUEST
} = process.env

const hostname = REACT_APP_IS_PULL_REQUEST === 'true'
  ? localStorage.getItem('hostnameOverride') || REACT_APP_HOSTNAME_OVERRIDE!
  : window.location.hostname
const hasWorkspaceHostname = window.location.host.split('.')[1] ? Boolean(window.location.host.split('.')[0]) : false

export {
  hostname,
  hasWorkspaceHostname
}
