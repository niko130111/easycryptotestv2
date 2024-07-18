$(document).ready(function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkTimeline() {
        $('.timeline-item').each(function() {
            if (isElementInViewport(this)) {
                $(this).addClass('in-view');
            }
        });
    }

    checkTimeline();
    $(window).on('scroll resize', checkTimeline);

    $('.faq-item h3').on('click', function() {
        $(this).parent('.faq-item').toggleClass('active');
        $(this).siblings('p').slideToggle();
    });

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate').forEach(element => {
        observer.observe(element);
    });
});
$(document).ready(function() {
    const performanceData = {
        labels: ["Jan 2022", "Feb 2022", "Mar 2022", "Apr 2022", "May 2022", "Jun 2022", "Jul 2022", "Aug 2022", "Sep 2022", "Oct 2022", "Nov 2022", "Dec 2022",
                 "Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023", "Jun 2023", "Jul 2023", "Aug 2023", "Sep 2023", "Oct 2023", "Nov 2023", "Dec 2023",
                 "Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024", "Jul 2024"],
        datasets: [
            {
                label: 'Easy Crypto',
                data: [1000, 1050, 1081.5, 1243.725, 1206.41325, 1254.66983, 1343.4967321, 1356.931699421, 1370.501016415, 1356.796006251, 1370.363966313, 1384.067606976, 1453.271687325,
                       1801.994278214, 1783.974335432, 1801.994278214, 1783.974335432, 1837.493565495, 2002.36798604, 1942.296946459, 2097.680702175, 2118.657509196, 2373.229258299, 2869.608399542, 3645.419667423,
                       3645.419667423, 5068.167744482, 6951.911612789, 6951.911612789, 6882.392456661, 7226.512379544, 7226.512379544],
                borderColor: 'rgba(0, 188, 212, 1)',
                backgroundColor: 'rgba(0, 188, 212, 0.2)',
                fill: false,
            },
            {
                label: 'Bitcoin',
                data: [1000, 833, 934.2794, 984.845348, 814.4735474, 688.040263134, 431.341204636, 550.968251755, 474.725951489, 460.061826819, 485.536870442, 407.040914171, 391.21979732,
                       547.764375973, 548.093116249, 674.045346839, 692.983031156, 640.147582794, 717.491507877, 691.438965566, 613.462293971, 634.191110243, 806.675927266, 923.348925272, 908.613821145,
                       915.233048611, 1314.958102249, 1533.068777405, 1303.778616208, 1451.837091927, 1576.007162539, 1459.325926178],
                borderColor: 'rgba(223, 176, 104, 1)', // Beige or
                backgroundColor: 'rgba(223, 176, 104, 0.2)', // Beige or
                fill: false,
            },
            {
                label: 'S&P 500',
                data: [1000, 947.4, 917.6, 950.4628, 866.63458, 866.7212434, 794.505226044, 867.008629385, 830.222698364, 753.060339372, 812.214177354, 855.892374518, 805.547764447,
                       855.420826083, 832.08924361, 861.2929443, 873.838208011, 876.02280351, 932.669454941, 961.61196238, 944.548604773, 898.508024888, 878.771883344, 956.280592303, 998.560958335,
                       1014.369042772, 1066.743977986, 1100.823001884, 1054.131862812, 1104.737272898, 1142.098199358, 1168.189499064],
                borderColor: 'rgba(153, 133, 237, 1)',
                backgroundColor: 'rgba(153, 133, 237, 0.2)',
                fill: false,
            },
        ]
    };

    const annualPerformanceData = {
        labels: ['2022', '2023', '2024'],
        datasets: [
            {
                label: 'Easy Crypto',
                data: [45.218921, 150.958060, 97.951985],
                backgroundColor: 'rgba(0, 188, 212, 0.6)',
                borderColor: 'rgba(0, 188, 212, 1)',
                borderWidth: 1,
            },
            {
                label: 'Bitcoin',
                data: [-60.816058, 132.664366, 60.762004],
                backgroundColor: 'rgba(223, 176, 104, 0.6)', // Beige or
                borderColor: 'rgba(223, 176, 104, 1)', // Beige or
                borderWidth: 1,
            },
            {
                label: 'S&P 500',
                data: [-19.437921, 24.233435, 17.157326],
                backgroundColor: 'rgba(153, 133, 237, 0.6)',
                borderColor: 'rgba(153, 133, 237, 1)',
                borderWidth: 1,
            },
        ]
    };

    // Options pour les graphiques
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + '%'; // Garde les unités en pourcentage pour ce graphique
                    }
                }
            },
            x: {
                offset: true, // Ajoute un espace au début et à la fin
                barPercentage: 0.5, // Réduire la largeur des barres
                categoryPercentage: 0.4, // Réduire l'espacement entre les groupes de barres
                grid: {
                    offset: true // Ajouter un espace supplémentaire au début et à la fin
                },
                ticks: {
                    padding: 20 // Augmente l'espace avant le premier et après le dernier label
                }
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': ' + context.raw + '%'; // Garde les unités en pourcentage pour ce graphique
                    }
                }
            }
        }
    };

    // Graphique de comparaison des performances
    const ctx1 = document.getElementById('performanceComparisonChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: performanceData,
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value; // Changer l'unité en dollars
                        }
                    }
                },
                x: {
                    barPercentage: 0.5,
                    categoryPercentage: 0.4,
                    grid: {
                        offset: true
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.raw; // Changer l'unité en dollars
                        }
                    }
                }
            }
        }
    });

    // Graphique des performances annuelles
    const ctx2 = document.getElementById('annualPerformanceChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: annualPerformanceData,
        options: chartOptions
    });
});
