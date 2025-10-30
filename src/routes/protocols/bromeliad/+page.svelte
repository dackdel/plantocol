<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Term from '$lib/components/Term.svelte';

	const title = 'Bromeliaceae<br>Bromeliad Micropropagation';
	const badges = [
		'Family: Bromeliaceae',
		'56 genera, 3,146+ species',
		'Native to Americas'
	];
	const introColumns = [
		'Bromeliads are tropical plants native to the Americas with wide distribution in rain forests, deserts and coastal areas. Most are epiphytes and terrestrial, diverse and ecologically important, found in microhabitats with strong interactions with fauna.',
		'These protocols focus on Brazilian Atlantic Forest species and demonstrate multiple regenerative pathways including nodule cluster culture, somatic embryogenesis, and temporary immersion systems for mass propagation.',
		'The morphogenetic pathway based on nodule cluster culture is stressed as it appears recurrent in bromeliads, results in high regenerative rates, and is easy to handle. All protocols follow a systematic 5-stage micropropagation process.'
	];
	const source = '';
</script>

<svelte:head>
	<title>Bromeliad Micropropagation Protocols - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="General 5-Stage Micropropagation Process">
		<div class="process-stages">
			<div class="stage">
				<strong>Stage 0: Mother Plant Preparation</strong>
				<ul>
					<li>Weekly application of chelated fertilizer (30-10-10 NPK) and Nitrofoska®</li>
					<li>Apply 10 mL NAA (5 mM) + Vitamin B1 to rosette to enhance offshoot formation</li>
					<li>Spray with benomyl and mineral oil</li>
					<li>Maintain in phytotron: 25±2°C, 16h light (300 μmol/m²/s)</li>
				</ul>
			</div>
			<div class="stage">
				<strong>Stage 1: Isolation & Induction (9 weeks)</strong>
				<ul>
					<li>Isolate axillary buds from young offshoots (1.0-2.5 cm)</li>
					<li>Sterilize: 70% ethanol (2 min) → 1.5% sodium hypochlorite (20 min) → rinse 3×</li>
					<li>Inoculate on paper filter bridges in liquid medium</li>
				</ul>
			</div>
			<div class="stage">
				<strong>Stage 2: Multiplication (10 weeks)</strong>
				<ul>
					<li>Subculture shoots in 300 mL flasks</li>
					<li>Species-specific hormone combinations</li>
					<li>5-8 clusters per flask in liquid medium</li>
				</ul>
			</div>
			<div class="stage">
				<strong>Stage 3: Elongation & Sorting (17 weeks)</strong>
				<ul>
					<li>Sort shoots: &lt;2 cm return to multiplication</li>
					<li>Shoots &gt;2 cm transfer to elongation medium</li>
					<li>Often supplemented with GA₃ (5-10 μM)</li>
					<li>Target size: &gt;3 cm for acclimatization</li>
				</ul>
			</div>
			<div class="stage">
				<strong>Stage 4: Acclimatization (13 weeks)</strong>
				<ul>
					<li>Minimum shoot size: 3.0 cm</li>
					<li>Roots optional (prune to 1 cm if present)</li>
					<li>Trays with 128 cells (60 cm³ each)</li>
					<li>Greenhouse with controlled mist, 50% shade</li>
					<li>Survival rates: 85-98%</li>
				</ul>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title="Base Culture Medium (MS + Morel Vitamins)">
		<table>
			<thead>
				<tr>
					<th>Component</th>
					<th>Concentration (mg/L)</th>
				</tr>
			</thead>
			<tbody>
				<tr><td colspan="2"><strong>Macronutrients</strong></td></tr>
				<tr><td>NH₄NO₃</td><td>1,650</td></tr>
				<tr><td>KNO₃</td><td>1,900</td></tr>
				<tr><td>CaCl₂·2H₂O</td><td>440</td></tr>
				<tr><td>KH₂PO₄</td><td>170</td></tr>
				<tr><td>MgSO₄·7H₂O</td><td>370</td></tr>
				<tr><td colspan="2"><strong>Morel Vitamins</strong></td></tr>
				<tr><td>Myo-inositol</td><td>100</td></tr>
				<tr><td>Thiamine-HCl</td><td>1.0</td></tr>
				<tr><td>Pyridoxine-HCl</td><td>1.0</td></tr>
				<tr><td>Nicotinic acid</td><td>1.0</td></tr>
				<tr><td>Ca pantothenate</td><td>1.0</td></tr>
				<tr><td>Glycine</td><td>0.01</td></tr>
				<tr><td colspan="2"><strong>Standard Additions</strong></td></tr>
				<tr><td>Sucrose</td><td>30 g/L</td></tr>
				<tr><td>pH</td><td>5.5-5.8</td></tr>
				<tr><td>Autoclave</td><td>121°C, 15-16 min</td></tr>
			</tbody>
		</table>
		<p><em>Note: FeEDTA and micronutrients follow standard MS formulation</em></p>
	</ContentBlock>

	<ContentBlock title="Substrate Options for Acclimatization">
		<ul>
			<li><strong>Option 1:</strong> 2:1:1 (v:v:v) Plantmax® HA : pine bark : carbonized rice coat</li>
			<li><strong>Option 2:</strong> 2:2:1 (v:v:v) peat : vermiculite : sand</li>
			<li><strong>Option 3:</strong> 1:1 (v:v) carbonized rice coat : Turfa Fértil® mineral supplement</li>
			<li><strong>Maintenance:</strong> Weekly spray with ¼MS salts solution</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Species-Specific Protocols">
		<div class="protocol-grid">
			<a href="/protocols/bromeliad-vriesea-friburgensis" class="protocol-card">
				<h3>Vriesea friburgensis var. paludosa</h3>
				<p class="badges">
					<span class="badge">Nodule Cluster</span>
					<span class="badge">Atlantic Forest</span>
				</p>
				<p>Regeneration from nodule cluster cultures using 2,4-D/Kin induction followed by 2-iP multiplication.</p>
			</a>

			<a href="/protocols/bromeliad-vriesea-reitzii" class="protocol-card">
				<h3>Vriesea reitzii</h3>
				<p class="badges">
					<span class="badge">Endemic Brazil</span>
					<span class="badge">2 Protocols</span>
				</p>
				<p>Adventitious shoots and nodule cluster regeneration. Red/yellow inflorescences. Threatened species.</p>
			</a>

			<a href="/protocols/bromeliad-vriesea-splendens" class="protocol-card">
				<h3>Vriesea splendens</h3>
				<p class="badges">
					<span class="badge">Flaming Sword</span>
					<span class="badge">TDZ Protocol</span>
				</p>
				<p>Nodule cluster culture with Thidiazuron multiplication. Brilliant red/orange bracts.</p>
			</a>

			<a href="/protocols/bromeliad-vriesea-fosteriana" class="protocol-card">
				<h3>Vriesea fosteriana</h3>
				<p class="badges">
					<span class="badge">TDZ Protocol</span>
					<span class="badge">Encapsulation</span>
				</p>
				<p>Standard protocol plus synthetic seed encapsulation in sodium alginate. Large ornamental species.</p>
			</a>

			<a href="/protocols/bromeliad-vriesea-hieroglyfica" class="protocol-card">
				<h3>Vriesea hieroglyphica</h3>
				<p class="badges">
					<span class="badge">TDZ Protocol</span>
					<span class="badge">Ornamental Foliage</span>
				</p>
				<p>Direct organogenesis with TDZ. Prized for glossy green leaves with dark horizontal bands.</p>
			</a>

			<a href="/protocols/bromeliad-alcantarea-imperialis" class="protocol-card">
				<h3>Alcantarea imperialis</h3>
				<p class="badges">
					<span class="badge">Imperial Bromeliad</span>
					<span class="badge">TDZ Protocol</span>
				</p>
				<p>Giant bromeliad (up to 2m). TDZ multiplication protocol. Purple/dark green bracts.</p>
			</a>

			<a href="/protocols/bromeliad-dyckia-distachya" class="protocol-card">
				<h3>Dyckia distachya</h3>
				<p class="badges">
					<span class="badge">Somatic Embryo</span>
					<span class="badge">Organogenesis</span>
				</p>
				<p>Dual protocols: Picloram-induced somatic embryogenesis and BAP/Kin organogenesis.</p>
			</a>

			<a href="/protocols/bromeliad-aechmea-fasciata" class="protocol-card">
				<h3>Aechmea fasciata</h3>
				<p class="badges">
					<span class="badge">TIS Protocol</span>
					<span class="badge">30:1 Rate</span>
				</p>
				<p>Temporary immersion system for mass propagation. High multiplication rate (30:1).</p>
			</a>

			<a href="/protocols/bromeliad-vriesea-brusquensis" class="protocol-card">
				<h3>Vriesea brusquensis</h3>
				<p class="badges">
					<span class="badge">TIS Protocol</span>
					<span class="badge">Mass Propagation</span>
				</p>
				<p>Temporary immersion system protocol. 3h stationary : 3min immersion cycle.</p>
			</a>
		</div>
	</ContentBlock>

	<ContentBlock title="Contamination Control">
		<ul>
			<li><strong>Bacterial:</strong> 20 mL/L Kanamycin and/or 100 mg/L Agrimicin® (filter sterilized)</li>
			<li><strong>Fungal:</strong> 20 mg/L miconazole nitrate (filter sterilized)</li>
			<li><strong>Prevention:</strong> Mother plant spray with benomyl and mineral oil, 1 month in phytotron</li>
		</ul>
	</ContentBlock>
</ProtocolLayout>

<style>
	.process-stages {
		display: grid;
		gap: 1.5rem;
	}
	
	.stage {
		padding: 1rem;
		border-left: 3px solid var(--accent-color, #4a9f7c);
		background: var(--card-bg, #f8f9fa);
	}
	
	.stage strong {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--accent-color, #4a9f7c);
	}
	
	.stage ul {
		margin: 0;
		padding-left: 1.25rem;
	}
	
	.stage li {
		margin: 0.25rem 0;
	}

	.protocol-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.protocol-card {
		padding: 1.5rem;
		border: 1px solid var(--border-color, #ddd);
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
		background: var(--card-bg, white);
	}

	.protocol-card:hover {
		border-color: var(--accent-color, #4a9f7c);
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
		transform: translateY(-2px);
	}

	.protocol-card h3 {
		margin: 0 0 0.5rem 0;
		color: var(--accent-color, #4a9f7c);
		font-size: 1.25rem;
	}

	.protocol-card p {
		margin: 0.5rem 0;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.badges {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin: 0.75rem 0 !important;
	}

	.badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background: var(--accent-color, #4a9f7c);
		color: white;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
	}
</style>
