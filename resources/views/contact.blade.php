@extends('layouts.website')

@section('content')

    <bradcam title="Podrška"></bradcam>

    <section class="section section-padding smaller" id="aboutPage">
       <div class="container">
           <div class="row">
               <div class="col-12">
                   <h2 class="contact-title">Kontakirajte nas</h2>
               </div>
               <div class="col-lg-8">
                   <contact-form></contact-form>
               </div>
               <div class="col-lg-3 offset-lg-1">
                   <div class="media contact-info">
                       <span class="contact-info__icon"><i class="ti-home"></i></span>
                       <div class="media-body">
                           <h3>Crna Gora, Podgorica.</h3>
                           <p><a href="https://maps.google.com/?q=Dalmatinska, 40" target="_blank" rel="noopener">Dalmatinska, 40</a></p>
                       </div>
                   </div>
                   <div class="media contact-info">
                       <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                       <div class="media-body">
                           <h3><a href="tel:+382 68 848 285">+382 68 848 285</a></h3>
                           <p>Pon - Pet 9am - 6pm</p>
                       </div>
                   </div>
                   <div class="media contact-info">
                       <span class="contact-info__icon"><i class="ti-email"></i></span>
                       <div class="media-body">
                           <h3><a href="mailto:podrška@mojtermin.me">podrška@mojtermin.me</a></h3>
                           <p>Tu smo 24/7 za pitanja!</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </section>

@endsection