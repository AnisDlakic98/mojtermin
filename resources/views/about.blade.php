@extends('layouts.website')

@section('content')

    <bradcam title="O nama"></bradcam>

    <section class="section section-padding smaller" id="aboutPage">
       <div class="container">
           <div class="row">
               <div class="col-md-7 mx-auto text-center">
                   <h1 class="mb-5">{{ $about->title }}</h1>
                   <div class="html-editor">
                       {!! $about->subtitle !!}
                   </div>
               </div>
           </div>
       </div>
    </section>

@endsection