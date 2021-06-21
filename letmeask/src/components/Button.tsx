type buttonProps = {
    text?: Array<string>
}

export function Button(props: buttonProps) {
    return (
        <button>{ props.text  || 'Default'}</button>
    );
}