// https://render.com/docs/pull-request-previews#how-pull-request-previews-work
const {
  REACT_APP_HOSTNAME_OVERRIDE,
  REACT_APP_IS_PULL_REQUEST,
  REACT_APP_DOMAIN
} = process.env

const hostname = REACT_APP_IS_PULL_REQUEST === 'true'
  ? localStorage.getItem('hostnameOverride') || REACT_APP_HOSTNAME_OVERRIDE!
  : window.location.hostname
const isPortalHostname = hostname === `portal.${REACT_APP_DOMAIN}`

export {
  hostname,
  isPortalHostname
}
