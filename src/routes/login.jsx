export default function Login() {
    return (
        <>
            <form className='popup' action="">
                <h3>Please enter passcode below:</h3>
                <input type="text" name="passcode" />
                <button type="submit" htmlFor="passcode" >Submit</button>
            </form>
        </>
    )
}