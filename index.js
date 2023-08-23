const isCheckout = () => {
    let elsIframe = document.querySelectorAll('iframe.pmts-portal-component')
    if (elsIframe.length) {
        const styles = window.getComputedStyle(elsIframe[0])
        return styles.display === 'none' || styles.visibility === 'hidden'
    }
    return false;
}