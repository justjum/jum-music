export default function Login( { change } ) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log()
        if (event.target[0].value === '!@#Jum123') {
            change();
        }

    }

    return (
        <>
            <form name='passForm' className='popup' action="" method="GET" onSubmit={handleSubmit}>
                <h3>Please enter passcode below:</h3>
                <input type="text" name="passcode" />
                <button type="submit" htmlFor="passcode" >Submit</button>
            </form>
        </>
    )
}
