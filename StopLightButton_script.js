function changeButtonColor() {
    if (document.getElementById('button').classList == ('btn btn-danger btn-lg')) {
        document.getElementById('button').classList.remove('btn', 'btn-danger', 'btn-lg')
        document.getElementById('button').classList.add('btn', 'btn-warning', 'btn-lg')
    } else if (document.getElementById('button').classList == ('btn btn-warning btn-lg')) {
        document.getElementById('button').classList.remove('btn', 'btn-warning', 'btn-lg')
        document.getElementById('button').classList.add('btn', 'btn-success', 'btn-lg')
    } else if (document.getElementById('button').classList == ('btn btn-success btn-lg')) {
        document.getElementById('button').classList.remove('btn', 'btn-success', 'btn-lg')
        document.getElementById('button').classList.add('btn', 'btn-danger', 'btn-lg')
    }
}