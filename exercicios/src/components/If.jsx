export default function If(props) {
    return props.cond ? props.children : null
}