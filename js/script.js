// Toggle Theme
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Mobile Toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const sidebar = document.getElementById('sidebar');
        
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });

        // Chart.js Implementation
        const ctx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Vendas Mensais (R$)',
                    data: [15000, 18000, 21000, 17000, 20000, 24000, 22000, 19000, 23000, 25000, 28000, 30000],
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderColor: '#4361ee',
                    borderWidth: 3,
                    pointBackgroundColor: '#4361ee',
                    pointRadius: 5,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        // Update chart on range change
        document.getElementById('chartRange').addEventListener('change', function() {
            // Simulate data change
            const newData = [...salesChart.data.datasets[0].data].sort(() => Math.random() - 0.5);
            salesChart.data.datasets[0].data = newData;
            salesChart.update();
        });