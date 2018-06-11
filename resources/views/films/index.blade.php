@extends('layouts.app')

@section('content')

 

 <div class="container">
    @foreach ($films as $film)
       
<a href="/films/{{ $film->film_slug }}">{{ $film->name }}</a>
<br>

    @endforeach
    {{ $films->links() }}
</div>



@endsection