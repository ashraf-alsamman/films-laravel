@extends('layouts.app')
@section('content')
<div class="container">
 
 <div class="row">
   <div id="PhotosByFilm" class="col-xs-8" ></div>
   <div class="col-xs-4" >
      <h4> Film Name {{ $Film->name}}</h4>
      <h5>  description {{ $Film->description}}</h5>
      <h5> Realease date {{ $Film->realease_date}}</h5>
      <script>var rating = {{ $Film->rating}};</script><div  id ="Rating"></div>
      <h5> Ticket price {{ $Film->ticket_price}}</h5>
   </div>
 </div>
<br />

  <script>var film_id = {{ $Film->id}};</script>
  @if (Auth::check())<div id="Comments"></div>@else
  <div className="form-group" ><a href="/login"> please login to add comments</a></div>
  @endif

  @foreach ($Comments as $comment)
  <div class="comment container">
    <div class="row">{{ App\User::find($comment->user_id)->name }}</div>
    <div class="row">{{ $comment->comment }}</div>
  </div>
  @endforeach


</div> 



@endsection