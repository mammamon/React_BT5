import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import qs from 'qs'

export const useQueryUrl = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = Object.fromEntries(searchParams)

    const setQueryParams = (param) => {
        const queryString = qs.stringify(param, {
            addQueryPrefix: true,
        })
        navigate(location.pathname + queryString)
    }

    return [queryParams, setQueryParams]
}
