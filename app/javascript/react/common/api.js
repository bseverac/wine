import { notification } from 'antd'
import { t } from 'i18next'

export const tokenCSRF = () => {
    return document.querySelector('meta[name="csrf-token"]').content
}

const defaultOnFailure = (response, onFailure) => {
    notification.error({ message: t('message.error'), placement: 'bottom' })
    onFailure(response)
}

const afterRequest = async (response, onSuccess, onFailure) => {
    const data = await response.json()
    const resolved = (response.status === 200)

    if (resolved) {
        onSuccess(data)
    } else {
        defaultOnFailure(data, onFailure)
    }
}

const header = () => {
    const h = new Headers()
    h.append('Cache-Control', 'no-cache')
    h.append('Accept', '*/*')
    h.append('Accept-Encoding', 'gzip,deflate')
    h.append('Connection', 'keep-alive')
    return h
}

const jsonHeader = () => {
    const h = header()
    h.append('X-CSRF-Token', tokenCSRF())
    h.append('Content-Type', 'application/json;charset=UTF-8;')
    return h
}

export const get = async (url, params, onSuccess, onFailure = () => { }) => {
    const requestOptions = {
        credentials: 'include',
        method: 'GET',
        headers: jsonHeader(),
        redirect: 'follow'
    }

    url = url + '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
    const response = await fetch(url, requestOptions)
    await afterRequest(response, onSuccess, onFailure)
}

