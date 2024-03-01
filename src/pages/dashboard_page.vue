<template>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 class="mb-sm-0">Tableau de bord</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Accueil</a></li>
                                <li class="breadcrumb-item active">Tableau de bord</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-xl-6">
                    <div class="d-flex flex-column h-100">
                        <div class="row">
                            <div class="col-xl-6 col-md-6">
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Emplois
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="36894">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="total_jobs" data-colors='["--vz-success"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div>
                            <!--end col-->
                            <div class="col-xl-6 col-md-6">
                                <!-- card -->
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Candidats
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="28410">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="apply_jobs" data-colors='["--vz-success"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
                            <div class="col-xl-6 col-md-6">
                                <!-- card -->
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Nouveaux
                                                    emplois
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="4305">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="new_jobs_chart" data-colors='["--vz-success"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
                            <div class="col-xl-6 col-md-6">
                                <!-- card -->
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Interview
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="5021">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="interview_chart" data-colors='["--vz-danger"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
                            <div class="col-xl-6 col-md-6">
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Engagés
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="3948">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="hired_chart" data-colors='["--vz-success"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div>
                            <!--end col-->
                            <div class="col-xl-6 col-md-6">
                                <!-- card -->
                                <div class="card card-animate overflow-hidden">
                                    <div class="position-absolute start-0" style="z-index: 0;">
                                        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120"
                                            width="200" height="120">

                                            <path id="Shape 8" class="s0"
                                                d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z" />
                                        </svg>
                                    </div>
                                    <div class="card-body" style="z-index:1 ;">
                                        <div class="d-flex align-items-center">
                                            <div class="flex-grow-1 overflow-hidden">
                                                <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Rejeté
                                                </p>
                                                <h4 class="fs-22 fw-semibold ff-secondary mb-0"><span class="counter-value"
                                                        data-target="1340">0</span></h4>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div id="rejected_chart" data-colors='["--vz-danger"]' class="apex-charts"
                                                    dir="ltr"></div>
                                            </div>
                                        </div>
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
                        </div>
                        <!--end row-->
                    </div>
                </div>
                <!--end col-->
                <div class="col-xl-6">
                    <div class="card card-height-100">
                        <div class="card-header align-items-center d-flex">
                            <h4 class="card-title mb-0 flex-grow-1">Entreprises</h4>
                            <div class="flex-shrink-0">
                                <a href="javascript:void(0)" class="btn btn-soft-primary btn-sm">Voir plus <i
                                        class="ri-arrow-right-line align-bottom"></i></a>
                            </div>
                        </div><!-- end card header -->

                        <div class="card-body">
                            <div class="table-responsive table-card">
                                <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs me-2 flex-shrink-0">
                                                        <div class="avatar-title bg-secondary-subtle rounded">
                                                            <img src="assets/images/companies/img-8.png" alt="" height="16">
                                                        </div>
                                                    </div>
                                                    <h6 class="mb-0">Millenium Horizon</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Kin, 03,
                                                Bismark, Golf Gombe
                                            </td>
                                            <td>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-secondary"><i
                                                                class="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-danger"><i
                                                                class="ri-mail-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-primary"><i
                                                                class="ri-global-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-info"><i
                                                                class="ri-twitter-line"></i></a>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" class="btn btn-link btn-sm">Voir détails <i
                                                        class="ri-arrow-right-line align-bottom"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs me-2 flex-shrink-0">
                                                        <div class="avatar-title bg-secondary-subtle rounded">
                                                            <img src="assets/images/companies/img-8.png" alt="" height="16">
                                                        </div>
                                                    </div>
                                                    <h6 class="mb-0">Hyper security</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Kin, 03,
                                                Bismark, Golf Gombe
                                            </td>
                                            <td>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-secondary"><i
                                                                class="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-danger"><i
                                                                class="ri-mail-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-primary"><i
                                                                class="ri-global-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-info"><i
                                                                class="ri-twitter-line"></i></a>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" class="btn btn-link btn-sm">Voir détails <i
                                                        class="ri-arrow-right-line align-bottom"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs me-2 flex-shrink-0">
                                                        <div class="avatar-title bg-secondary-subtle rounded">
                                                            <img src="assets/images/companies/img-8.png" alt="" height="16">
                                                        </div>
                                                    </div>
                                                    <h6 class="mb-0">Fisco</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Kin, 03,
                                                Bismark, Golf Gombe
                                            </td>
                                            <td>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-secondary"><i
                                                                class="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-danger"><i
                                                                class="ri-mail-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-primary"><i
                                                                class="ri-global-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-info"><i
                                                                class="ri-twitter-line"></i></a>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" class="btn btn-link btn-sm">Voir détails <i
                                                        class="ri-arrow-right-line align-bottom"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs me-2 flex-shrink-0">
                                                        <div class="avatar-title bg-secondary-subtle rounded">
                                                            <img src="assets/images/companies/img-8.png" alt="" height="16">
                                                        </div>
                                                    </div>
                                                    <h6 class="mb-0">Castor network</h6>
                                                </div>
                                            </td>
                                            <td>
                                                <i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i> Kin, 03,
                                                Bismark, Golf Gombe
                                            </td>
                                            <td>
                                                <ul class="list-inline mb-0">
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-secondary"><i
                                                                class="ri-facebook-fill"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-danger"><i
                                                                class="ri-mail-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-primary"><i
                                                                class="ri-global-line"></i></a>
                                                    </li>
                                                    <li class="list-inline-item">
                                                        <a href="javascript:void(0)" class="link-info"><i
                                                                class="ri-twitter-line"></i></a>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <a href="javascript:void(0)" class="btn btn-link btn-sm">Voir détails <i
                                                        class="ri-arrow-right-line align-bottom"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="align-items-center mt-4 pt-2 justify-content-between d-md-flex">
                                <div class="flex-shrink-0 mb-2 mb-md-0">
                                    <div class="text-muted">
                                        Showing <span class="fw-semibold">5</span> of <span class="fw-semibold">25</span>
                                        Results
                                    </div>
                                </div>
                                <ul class="pagination pagination-separated pagination-sm mb-0">
                                    <li class="page-item disabled">
                                        <a href="#" class="page-link">←</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">→</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> <!-- .card-->
                </div>
                <!--end col-->
            </div>

        </div>
        <!-- container-fluid -->
    </div>
</template>

<script>

function getChartColorsArray(e) {
    if (null !== document.getElementById(e)) {
        var a = document.getElementById(e).getAttribute("data-colors");
        if (a)
            return (a = JSON.parse(a)).map(function (e) {
                var a = e.replace(" ", "");
                return -1 === a.indexOf(",")
                    ? getComputedStyle(document.documentElement).getPropertyValue(a) || a
                    : 2 == (e = e.split(",")).length
                        ? "rgba(" +
                        getComputedStyle(document.documentElement).getPropertyValue(e[0]) +
                        "," +
                        e[1] +
                        ")"
                        : a;
            });
    }
}

function loadCharts() {
    var e = getChartColorsArray("sales-by-locations");
    e &&
        ((document.getElementById("sales-by-locations").innerHTML = ""),
            (worldemapmarkers = ""),
            (worldemapmarkers = new jsVectorMap({
                map: "world_merc",
                selector: "#sales-by-locations",
                zoomOnScroll: !1,
                zoomButtons: !1,
                selectedMarkers: [0, 5],
                regionStyle: {
                    initial: {
                        stroke: "#9599ad",
                        strokeWidth: 0.25,
                        fill: e[0],
                        fillOpacity: 1,
                    },
                },
                markersSelectable: !0,
                markers: [
                    { name: "Palestine", coords: [31.9474, 35.2272] },
                    { name: "Russia", coords: [61.524, 105.3188] },
                    { name: "Canada", coords: [56.1304, -106.3468] },
                    { name: "Greenland", coords: [71.7069, -42.6043] },
                ],
                markerStyle: { initial: { fill: e[1] }, selected: { fill: e[2] } },
                labels: {
                    markers: {
                        render: function (e) {
                            return e.name;
                        },
                    },
                },
            })));
}
export default {
    name: 'Dashboard',

    created() {
        // Set up a global error handler
        this.$options.errorCaptured = function (err, vm, info) {
            console.error('Error captured:', err);
            console.error('Vue instance:', vm);
            console.error('Error info:', info);
            // Prevent the default behavior of Vue.js error handling
            return false;
        };
    },

    unmounted() {
        this.$router.go();
    },

    mounted() {
        var linechartDashedColors = getChartColorsArray("line_chart_dashed"),
            chartDonutBasicColors =
                (linechartDashedColors &&
                    ((options = {
                        chart: {
                            height: 345,
                            type: "line",
                            zoom: { enabled: !1 },
                            toolbar: { show: !1 },
                        },
                        colors: linechartDashedColors,
                        dataLabels: { enabled: !1 },
                        stroke: { width: [3, 4, 3], curve: "straight", dashArray: [0, 8, 5] },
                        series: [
                            {
                                name: "New Application",
                                data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49],
                            },
                            {
                                name: "Interview",
                                data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                            },
                            {
                                name: " Hired",
                                data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                            },
                        ],
                        markers: { size: 0, hover: { sizeOffset: 6 } },
                        xaxis: {
                            categories: [
                                "01 Jan",
                                "02 Jan",
                                "03 Jan",
                                "04 Jan",
                                "05 Jan",
                                "06 Jan",
                                "07 Jan",
                                "08 Jan",
                                "09 Jan",
                                "10 Jan",
                                "11 Jan",
                                "12 Jan",
                            ],
                        },
                        grid: { borderColor: "#f1f1f1" },
                    }),
                        (chart = new ApexCharts(
                            document.querySelector("#line_chart_dashed"),
                            options
                        )).render()),
                    getChartColorsArray("store-visits-source")),
            worldemapmarkers =
                (chartDonutBasicColors &&
                    ((options = {
                        series: [44, 55, 41, 17, 15],
                        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
                        chart: { height: 333, type: "donut" },
                        legend: { position: "bottom" },
                        stroke: { show: !1 },
                        dataLabels: { dropShadow: { enabled: !1 } },
                        colors: chartDonutBasicColors,
                    }),
                        (chart = new ApexCharts(
                            document.querySelector("#store-visits-source"),
                            options
                        )).render()),
                    "");

        (window.onresize = function () {
            setTimeout(() => {
                loadCharts();
            }, 0);
        }),
            loadCharts();
        var jobListAll,
            searchResultList,
            options,
            chart,
            jobListAllData = [
                [
                    "Marketing Director",
                    "Meta4Systems",
                    "Vinninga, Sweden",
                    "$250 - $800",
                    "0-5 year",
                    "Full Time",
                ],
                [
                    "UI/UX designer",
                    "Zoetic Fashion",
                    "Cullera, Spain",
                    "$400+",
                    "0-2 year",
                    "Part Time",
                ],
                [
                    "Web Designer",
                    "Force Medicines",
                    "Ugashik, US",
                    "$412 - $241 ",
                    "3+ year",
                    "Freelancer",
                ],
                [
                    "Full Stack Engineer",
                    "Syntyce Solutions",
                    "Zuweihir, UAE",
                    "$650 - $900",
                    "0-1+ year",
                    "Full Time",
                ],
                [
                    "Assistant / Store Keeper",
                    "Moetic Fashion",
                    "Limestone, US",
                    "$340 - $800",
                    "0-3 year",
                    "Intership",
                ],
                [
                    "Project Manager",
                    "Themesbrand",
                    "California, US",
                    "$400 - $600",
                    "3+ year",
                    "Part Time",
                ],
                [
                    "Education Training",
                    "Micro Design",
                    "Germany",
                    "$750 - $940",
                    "1.5+ year",
                    "Freelancer",
                ],
                [
                    "Graphic Designer",
                    "Digitech Galaxy",
                    "Mughairah, UAE",
                    "$160 - $230",
                    "2-3+ year",
                    "Full Time",
                ],
                [
                    "React Developer",
                    "iTest Factory",
                    "Khabākhib, UAE",
                    "$90 - $160",
                    "5+ year",
                    "Intership",
                ],
                [
                    "Executive, HR Operations",
                    "Micro Design",
                    "Texanna, US",
                    "$50 - $120",
                    "1-5 year",
                    "Part Time",
                ],
                [
                    "Project Manager",
                    "Meta4Systems",
                    "Limestone, US",
                    "$210 - $300",
                    "0-2+ year",
                    "Freelancer",
                ],
                [
                    "Full Stack Engineer",
                    "Force Medicines",
                    "Ugashik, US",
                    "$120 - $180",
                    "2-5 year",
                    "Part Time",
                ],
                [
                    "Full Stack Engineer",
                    "Digitech Galaxy",
                    "Maidaq, UAE",
                    "$900 - $1020",
                    "3-5 year",
                    "Full Time",
                ],
                [
                    "Marketing Director",
                    "Zoetic Fashion",
                    "Quesada, US",
                    "$600 - $870",
                    "0-5 year",
                    "Freelancer",
                ],
            ],
            chartRadialbarBasicColors =
                (document.getElementById("recomended-jobs") &&
                    ((jobListAll = new gridjs.Grid({
                        columns: [
                            { name: "Position", width: "150px" },
                            { name: "Company Name", width: "250px" },
                            { name: "Location", width: "250px" },
                            { name: "Salary", width: "250px" },
                            { name: "Experience", width: "150px" },
                            { name: "Job Type", width: "150px" },
                        ],
                        sort: !0,
                        pagination: { limit: 6 },
                        data: jobListAllData,
                    }).render(document.getElementById("recomended-jobs"))),
                        (searchResultList =
                            document.getElementById("searchResultList")).addEventListener(
                                "keyup",
                                function () {
                                    var e = searchResultList.value.toLowerCase();
                                    a = e;
                                    var a,
                                        e = jobListAllData.filter(function (e) {
                                            return (
                                                -1 !== e[0].toLowerCase().indexOf(a.toLowerCase()) ||
                                                -1 !== e[1].toLowerCase().indexOf(a.toLowerCase())
                                            );
                                        });
                                    jobListAll.updateConfig({ data: e }).forceRender();
                                }
                            )),
                    Array.from(document.querySelectorAll("#candidate-list li")).forEach(
                        function (t) {
                            t.querySelector("a").addEventListener("click", function () {
                                var e = t.querySelector(".candidate-name").innerHTML,
                                    a = t.querySelector(".candidate-position").innerHTML;
                                (document.getElementById("candidate-name").innerHTML = e),
                                    (document.getElementById("candidate-position").innerHTML = a);
                            });
                        }
                    ),
                    window.addEventListener("load", () => {
                        var t = document.querySelectorAll("#candidate-list li");
                        r.onkeyup = () => {
                            var e;
                            for (e of t)
                                -1 ==
                                    e.querySelector(".candidate-name").innerHTML.toLowerCase().indexOf(a)
                                    ? e.classList.add("d-none")
                                    : e.classList.remove("d-none");
                        };
                    }),
                    getChartColorsArray("total_jobs"));
        chartRadialbarBasicColors &&
            ((options = {
                series: [95],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#total_jobs"),
                    options
                )).render()),
            (chartRadialbarBasicColors = getChartColorsArray("apply_jobs")) &&
            ((options = {
                series: [97],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#apply_jobs"),
                    options
                )).render()),
            (chartRadialbarBasicColors = getChartColorsArray("interview_chart")) &&
            ((options = {
                series: [89],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#interview_chart"),
                    options
                )).render()),
            (chartRadialbarBasicColors = getChartColorsArray("hired_chart")) &&
            ((options = {
                series: [64],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#hired_chart"),
                    options
                )).render()),
            (chartRadialbarBasicColors = getChartColorsArray("rejected_chart")) &&
            ((options = {
                series: [20],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#rejected_chart"),
                    options
                )).render()),
            (chartRadialbarBasicColors = getChartColorsArray("new_jobs_chart")) &&
            ((options = {
                series: [80],
                chart: { type: "radialBar", width: 105, sparkline: { enabled: !0 } },
                dataLabels: { enabled: !1 },
                plotOptions: {
                    radialBar: {
                        hollow: { margin: 0, size: "70%" },
                        track: { margin: 1 },
                        dataLabels: {
                            show: !0,
                            name: { show: !1 },
                            value: { show: !0, fontSize: "16px", fontWeight: 600, offsetY: 8 },
                        },
                    },
                },
                colors: chartRadialbarBasicColors,
            }),
                (chart = new ApexCharts(
                    document.querySelector("#new_jobs_chart"),
                    options
                )).render());
    },
}
</script>

<style scoped>
.s0 {
    opacity: .05;
    fill: var(--vz-success)
}
</style>
