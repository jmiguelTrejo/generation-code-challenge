import { useEffect, useRef, useState } from "react"

/* Hook for make fetch using cache optionally */
export const useFetch = (url, cache ) => {

    /* Hook for maintain the reference of component that invokes this hook */
    const isMounted = useRef(true);

    /* If the component that invokes this hook is unmounted then change the ref to false*/
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect( () => {
        const fetchData = async() =>{
            let foundCache = false;
            /* If this hook is invoked with cache in true search in localStorage */
            if( !!cache ){
                const cacheUrl = window.localStorage.getItem('cacheUrl');
                /* Validate if the localstorage has property  */
                if( cacheUrl !== null ){
                    const urlArray = JSON.parse(cacheUrl);
                    const resp = urlArray.find( ({key}) =>  key === url );
                    /* If previous data is founded set the state with cache data */
                    if( !!resp ){
                        setState({
                            loading: false,
                            error: null,
                            data:resp.data
                        })
                    foundCache = true;
                    }
                }
            }
            /* If this hook is invoked with cache in false or does not found in localStorage then fetch in url */
            if( !foundCache ){
                try {
                    const response = await fetch( url );
                    const data = await response.json();
                    /*  If the component that invokes this hook is mounted  */
                    if( isMounted.current ){
                        /* If for save response data in localStorage */
                        if( !!cache ){
                            let urlArray = [];
                            const obj = { key: url, data: data }
                            const cacheUrl = window.localStorage.getItem('cacheUrl');
                            if( cacheUrl !== null ){
                                urlArray = JSON.parse(cacheUrl);
                            }
                            urlArray.push( obj );
                            localStorage.setItem('cacheUrl', JSON.stringify( urlArray ) );
                        }
                        setState({
                            loading: false,
                            error: null,
                            data:data
                        })
                    }
                } catch (err) {
                    if( isMounted.current ){
                        console.log('Error in ', url,err);
                        setState({
                            loading: false,
                            error: null,
                            data:null
                        })
                    }
                }
                    
            }
        }
        fetchData();

    }, [url,cache]);

    return state;

}
