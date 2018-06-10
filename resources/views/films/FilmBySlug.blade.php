@extends('layouts.app')

@section('content')

 <div class="container">  
 <h4> </h4>
 
 <br />
 {{ $Film}}


@foreach ($Photos as $photo)
   


                     
                    <img class="  profil-img"  width="70" src="{{URL::asset('/uploads/')}}/{{ $photo->data }}" alt="profil">
                   
@endforeach





  </div> 

@endsection