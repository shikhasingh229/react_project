const head1 = React.createElement("h1",
{class:"header"},
"Namaste Everyone!")

const head2 = React.createElement("h2",
{class:"header"},
"Kaise H Aaplog?")

const cont=React.createElement("div",
{
    id:"container"
},[head1,head2])

const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(cont)