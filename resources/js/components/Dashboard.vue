<template>
    <div id="fullCalendar" class="mb-5">

        <div v-if="eventsForCalender.length === 0" class="data-not-found d-flex justify-content-center">
            <div class="m-auto">
                <img src="/img/broke.svg" class="w-50 mx-auto d-block tex-center" alt="">
                <h2 class="mt-3 text-center">Nemate zakazanih termina!</h2>
            </div>
        </div>

        <div v-if="eventsForCalender.length !== 0">
            <div class="card">
                <div class="card-body p-0">
                    <div id="calendar"></div>
                </div>
            </div>
        </div>

        <!-- calendar modal -->
        <div id="modal-view-event" class="modal modal-top fade calendar-modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <h2 class="modal-title"><span class="event-icon"></span><span class="event-title"></span></h2>
                        <div class="event-body"></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Zatvori</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                events: [],
                eventsForCalender: [],
            }
        },
        methods: {
            loadUserProfile() {
                axios.get("/api/profile").then(({data}) => {
                    this.user = data.user;
                    if(data.salonAppointments && data.salonAppointments.length > 0) {
                        this.events = data.salonAppointments;
                        this.events.forEach((item) => {
                            this.eventsForCalender.push({
                                title: item.service_name,
                                description: `<div class="mt-2"><p class="mb-1"><b>Poruka:</b> ${item.message}</p><p class="mb-1"><b>Vrijeme:</b> ${item.time}</p></div>`,
                                icon: "",
                                start: item.date,
                                end: item.date,
                                className: 'fc-bg-default',
                                allDay: false
                            });
                        });
                        window.eventsForCalender = this.eventsForCalender;
                    }
                }).then(() => {
                    this.initCalender();
                });
            },
            initCalender(){
                jQuery(document).ready(function () {
                    jQuery('.datetimepicker').datepicker({
                        timepicker: true,
                        language: 'en',
                        range: true,
                        multipleDates: true,
                        multipleDatesSeparator: " - "
                    });
                    jQuery("#add-event").submit(function () {
                        alert("Submitted");
                        var values = {};
                        $.each($('#add-event').serializeArray(), function (i, field) {
                            values[field.name] = field.value;
                        });
                        console.log(
                            values
                        );
                    });
                });

                (function () {
                    'use strict';
                    // ------------------------------------------------------- //
                    // Calendar
                    // ------------------------------------------------------ //
                    jQuery(function () {
                        // page is ready
                        jQuery('#calendar').fullCalendar({
                            themeSystem: 'bootstrap4',
                            // emphasizes business hours
                            businessHours: false,
                            defaultView: 'month',
                            // event dragging & resizing
                            editable: true,
                            // header
                            header: {
                                left: 'title',
                                center: 'month,agendaWeek,agendaDay',
                                right: 'today prev,next'
                            },

                            events: window.eventsForCalender,
                            eventRender: function (event, element) {
                                if (event.icon) {
                                    element.find(".fc-title").prepend("<i class='fa fa-" + event.icon + "'></i>");
                                }
                            },
                            dayClick: function () {
                                jQuery('#modal-view-event-add').modal();
                            },
                            eventClick: function (event, jsEvent, view) {
                                jQuery('.event-icon').html("<i class='fa fa-" + event.icon + "'></i>");
                                jQuery('.event-title').html(event.title);
                                jQuery('.event-body').html(event.description);
                                jQuery('.eventUrl').attr('href', event.url);
                                jQuery('#modal-view-event').modal();
                            },
                        })
                    });

                })(jQuery);
            }
        },
        mounted() {
            this.loadUserProfile();
        }
    }
</script>

