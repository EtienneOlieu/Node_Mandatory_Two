<script>
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
    import { BASE_URL } from "../../store/urlDomain.js";
    import toastr from "toastr";
    import 'toastr/build/toastr.css';
    
    const form = useForm();

    async function signUp(){
        //fill signup here
    }

</script>

<form use:form on:submit|preventDefault="{signUp}">
    <h1>SIGN UP</h1>
    <input type="text" name="name" use:validators={[required]} />
    <Hint on="required">Mandatory field</Hint>
    
    <input type="email" name="email" use:validators={[required, email]} />
    <HintGroup for="email">
        <Hint on="required">Mandatory field</Hint>
        <Hint on="email" hideWhenRequired>Invalid email</Hint>
    </HintGroup>

    <input type="password" name="password" use:validators={[required]} />
    <Hint for="password" on="required">Mandatory field</Hint>

    <button disabled={!$form.valid} type="submit">Sign Up</button>
</form>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }
</style>