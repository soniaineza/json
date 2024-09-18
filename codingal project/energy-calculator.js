document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('energy-form');
    const results = document.getElementById('results');
    const ledPercentage = document.getElementById('led-percentage');
    const ledSlider = document.getElementById('led-lighting');

    ledSlider.addEventListener('input', () => {
        ledPercentage.textContent = `${ledSlider.value}%`;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateSavings();
    });

    function calculateSavings() {
        const currentUsage = parseFloat(document.getElementById('current-usage').value);
        const homeSize = parseFloat(document.getElementById('home-size').value);
        const smartThermostat = document.getElementById('smart-thermostat').value;
        const ledLighting = parseFloat(document.getElementById('led-lighting').value);

        // Simple calculation logic (you can make this more sophisticated)
        let usageReduction = 0;
        usageReduction += smartThermostat === 'yes' ? currentUsage * 0.15 : 0; // 15% savings with smart thermostat
        usageReduction += (ledLighting / 100) * currentUsage * 0.10; // Up to 10% savings with LED lighting
        usageReduction += (homeSize / 1000) * 5; // 5 kWh savings per 1000 sq ft

        const costSavings = usageReduction * 0.12; // Assuming $0.12 per kWh
        const co2Reduction = usageReduction * 0.99; // 0.99 lbs CO2 per kWh

        document.getElementById('usage-reduction').textContent = usageReduction.toFixed(2);
        document.getElementById('cost-savings').textContent = costSavings.toFixed(2);
        document.getElementById('co2-reduction').textContent = co2Reduction.toFixed(2);

        results.classList.remove('d-none');
    }
});