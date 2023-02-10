export const ErrorPopUp = () => {

    const closePopUp = () => {
        let popUp = document.getElementById('alert');
        popUp.style.display = "none";
    }
    
    return(
        <div class="warning-alert" id="alert">
            <h3>Warning Alert Message</h3>
            <span class="close" onClick={closePopUp}>&times;</span>
        </div>
    );
}