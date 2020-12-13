@extends('layouts.website')

@section('content')

    <bradcam title="Pitanja i odgovori"></bradcam>

    <section class="section section-padding smaller" id="faqsPage">
       <div class="container">
           <div class="row">
               <div id="accordion">
                   @foreach($faqs as $faq)
                       <div class="card mb-3">
                           <div class="card-header">
                               <a class="card-link {{ $loop->index != 0 ? 'collapsed' : ''}}" data-toggle="collapse" href="#collapse-{{ $loop->index }}">{{ $faq->title }}</a>
                           </div>
                           <div id="collapse-{{ $loop->index }}" class="collapse {{ $loop->index == 0 ? 'show' : ''}}" data-parent="#accordion">
                               <div class="card-body">{{ $faq->body }}</div>
                           </div>
                       </div>
                   @endforeach
               </div>
           </div>
       </div>
    </section>

@endsection