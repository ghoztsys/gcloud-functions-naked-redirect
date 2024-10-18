import { type HttpFunction } from '@google-cloud/functions-framework'
import useDebug from 'debug'

const REDIRECT_SUBDOMAIN = process.env.REDIRECT_SUBDOMAIN ?? 'www'
const REDIRECT_HTTPS = process.env.REDIRECT_HTTPS === undefined ? true : process.env.REDIRECT_HTTPS === 'true'
const REDIRECT_CODE = process.env.REDIRECT_CODE ?? '301'

const debug = useDebug('fn')

export const redirect: HttpFunction = (req, res) => {
  if (req.hostname.startsWith(`${REDIRECT_SUBDOMAIN}.`)) {
    return res.sendStatus(204)
  }

  const newHost = `${REDIRECT_SUBDOMAIN}.${req.headers.host}`
  const newProtocol = REDIRECT_HTTPS ? 'https' : req.protocol
  const newUrl = `${newProtocol}://${newHost}${req.originalUrl}`

  debug(`Redirecting to ${newUrl}...`, 'OK')

  return res.redirect(Number(REDIRECT_CODE), newUrl)
}
