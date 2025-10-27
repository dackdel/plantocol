<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	import Timer from '$lib/components/Timer.svelte';
	import StepItem from '$lib/components/StepItem.svelte';
	import Term from '$lib/components/Term.svelte';
	import { unitSystem } from '$lib/stores/units';
	import { convertTemp, convertVolume, convertWeight, displayPH } from '$lib/utils/unitConversions';
	
	const protocolId = 'sarracenia';
	
	const title = 'Sarracenia Species<br>Pitcher Plants';
	const badges = [
		'Difficulty: ⭐⭐ Intermediate',
		'Success Rate: 50-80%',
		'Explant: Seed',
		'Conservation: Endangered Species'
	];
	const introColumns = [
		'Sarracenia pitcher plants are carnivorous species native to North America, with several listed as federally endangered. This protocol enables conservation through in vitro propagation from seed, including S. oreophila (federally endangered), S. leucophylla, and S. purpurea spp. venosa.',
		'The protocol uses sulfuric acid scarification to break seed dormancy, achieving germination rates exceeding 50% within 3 weeks. Optimal germination occurs on diluted MS media (1/6 to 1/3 strength) with acidic pH (4.5-5.7) to simulate bog environments.',
		'Sustainable shoot multiplication is achieved using cytokinins, with trans-zeatin producing the highest quality shoots. The protocol includes successful cryopreservation methods for long-term seed storage in liquid nitrogen, critical for endangered species conservation.'
	];
	const source = 'Based on: Determann et al. (2012). "Germination In Vitro, Micropropagation, and Cryogenic Storage for Three Rare Pitcher Plants." HortScience 47(1):74-79.';
</script>

<svelte:head>
	<title>Sarracenia Pitcher Plant Protocol - Plantocol</title>
</svelte:head>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Safety Warning">
		<div style="background: #fff3cd; border-left: 4px solid #ff6b6b; padding: 20px; margin-bottom: 20px;">
			<p><strong>⚠️ CONCENTRATED SULFURIC ACID HAZARD</strong></p>
			<p>This protocol requires concentrated sulfuric acid (H₂SO₄), which is highly corrosive and dangerous. Required safety equipment:</p>
			<ul>
				<li>Chemical-resistant gloves (nitrile minimum, neoprene preferred)</li>
				<li>Safety goggles or face shield</li>
				<li>Lab coat or chemical-resistant apron</li>
				<li>Work in fume hood or well-ventilated area</li>
				<li>Have neutralizing agent (sodium bicarbonate) readily available</li>
				<li>Know location of emergency eyewash and shower</li>
			</ul>
			<p><strong>Never add water to acid. Always add acid to water slowly.</strong></p>
		</div>
	</ContentBlock>

	<ContentBlock title="Materials Needed" columns={3}>
		<div>
			<p><strong>Chemicals & Reagents:</strong></p>
			<ul>
				<li>Concentrated sulfuric acid (H₂SO₄, 95-98%)</li>
				<li>MS basal salts</li>
				<li>Sucrose (3%)</li>
				<li>Phytagel® or Gelrite® ({convertWeight(4.5, $unitSystem)}/L)</li>
				<li>Thiamine HCl (0.4 mg/L)</li>
				<li>Myo-inositol (100 mg/L)</li>
				<li>KOH and HCl for pH adjustment</li>
			</ul>
		</div>
		<div>
			<p><strong>Plant Growth Regulators:</strong></p>
			<ul>
				<li>Kinetin (4.6 μM / 1 mg/L)</li>
				<li><Term abbr="BAP" /> (13.3 μM / 3 mg/L)</li>
				<li>Trans-zeatin (9.1 μM / 2 mg/L)</li>
				<li><Term abbr="NAA" /> (0.5 μM / 0.1 mg/L)</li>
			</ul>
		</div>
		<div>
			<p><strong>Specialized Equipment:</strong></p>
			<ul>
				<li>Metal sieves with fine nylon fabric (162×162 fibers/inch, ~60 μm openings)</li>
				<li>Fume hood</li>
				<li>Glass beakers (acid-resistant)</li>
				<li>Sterile petri dishes (60×15 mm)</li>
				<li>Magenta boxes for shoot culture</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="Step 1: Seed Scarification & Sterilization">
		<p><strong>Species-Specific Notes:</strong> This protocol works for S. leucophylla, S. oreophila, and S. purpurea. Seeds are small and fragile, requiring gentle handling.</p>
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-1-1" stepNumber="Initial Rinse">
				Rinse seeds in tap water for <Timer duration={600} label="Tap Water Rinse">10 minutes</Timer>. Place seeds in metal sieve with fine nylon fabric to prevent loss during handling.
			</StepItem>
			<StepItem {protocolId} stepId="step-1-2" stepNumber="Acid Scarification">
				<strong>⚠️ CRITICAL SAFETY STEP:</strong> In fume hood, add seeds to {convertVolume(3, $unitSystem)} concentrated sulfuric acid. Gently stir for <Timer duration={360} label="Acid Scarification">6 minutes</Timer>. This breaks seed dormancy. Note: 6 minutes is optimal—longer exposure damages seeds.
			</StepItem>
			<StepItem {protocolId} stepId="step-1-3" stepNumber="Acid Neutralization">
				Immediately rinse seeds in sterile water. Perform <strong>five consecutive rinses</strong>, each for <Timer duration={300} label="Sterile Rinse">5 minutes</Timer>. Use sieve to collect seeds between rinses. Total rinse time: 25 minutes.
			</StepItem>
		</ol>
		<p style="margin-top: 20px;"><em><strong>Research Note:</strong> Experiments showed 6-min scarification produced significantly higher germination (32.5-58%) compared to 10-min treatment (12.5-25%). Shorter exposure reduces seed coat damage while maintaining sterilization.</em></p>
	</ContentBlock>

	<ContentBlock title="Step 2: Germination Media Formulations">
		<p><strong>Key Finding:</strong> Sarracenia species prefer diluted MS media and acidic pH to simulate natural bog conditions.</p>
		<table>
			<thead>
				<tr>
					<th>Species</th>
					<th>Optimal Medium</th>
					<th>Expected Germination</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>S. leucophylla</strong></td>
					<td>1/3 strength <Term abbr="MS" /> salts ({convertWeight(1.48, $unitSystem)}/L) • <Term abbr="pH" /> {displayPH(4.5)} • No hormones • Sucrose 3% • Phytagel {convertWeight(4.5, $unitSystem)}/L</td>
					<td>50-58% at 3 weeks</td>
				</tr>
				<tr>
					<td><strong>S. oreophila</strong><br><em>(Federally Endangered)</em></td>
					<td>1/6 strength <Term abbr="MS" /> salts ({convertWeight(0.74, $unitSystem)}/L) • <Term abbr="pH" /> {displayPH(5.7)} • No hormones • Sucrose 3% • Phytagel {convertWeight(4.5, $unitSystem)}/L</td>
					<td>53% at 3 weeks</td>
				</tr>
				<tr>
					<td><strong>S. purpurea spp. venosa</strong></td>
					<td>1/3 strength <Term abbr="MS" /> salts ({convertWeight(1.48, $unitSystem)}/L) • <Term abbr="pH" /> {displayPH(5.7)} • No hormones • Sucrose 3% • Phytagel {convertWeight(4.5, $unitSystem)}/L</td>
					<td>23-50% at 3 weeks</td>
				</tr>
			</tbody>
		</table>
		<p style="margin-top: 20px;"><strong>Media Preparation:</strong></p>
		<ul>
			<li>Add all ingredients except gelling agent</li>
			<li>Adjust pH with KOH or HCl <em>before</em> adding Phytagel</li>
			<li><Term abbr="autoclave" /> at {convertTemp(121, $unitSystem)}, 15 <Term abbr="PSI" />, <Timer duration={1200} label="Autoclave">20 minutes</Timer></li>
			<li>Pour into sterile petri dishes (60×15 mm), 5-8 seeds per plate</li>
		</ul>
	</ContentBlock>

	<ContentBlock title="Step 3: Germination Conditions">
		<div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
			<p><strong>Temperature:</strong> {convertTemp(25, $unitSystem)}-{convertTemp(26, $unitSystem)}</p>
			<p><strong>Light:</strong> 16/8-hour (day/night) <Term abbr="photoperiod" /></p>
			<p><strong>Light Intensity:</strong> ~30 μmol·m⁻²·s⁻¹ (cool white fluorescent lamps)</p>
			<p><strong>Timeline:</strong> Germination begins in 10-14 days, reaches maximum at 3 weeks</p>
			<p><strong>Success Indicator:</strong> Radicle emergence from seed coat</p>
		</div>
		<p style="margin-top: 20px;"><em><strong>pH Effect:</strong> For S. leucophylla, lowering pH from 5.7 to 4.5 increased germination from 50% to 58%, though differences were not statistically significant. Acidic pH simulates natural bog environment.</em></p>
	</ContentBlock>

	<ContentBlock title="Step 4: Shoot Multiplication (2-6 months)" columns={2}>
		<div>
			<p><strong>Multiplication Medium Comparison:</strong></p>
			<table>
				<thead>
					<tr>
						<th>Cytokinin Type</th>
						<th>S. purpurea Rate<br>(per 2 months)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>No hormones</td>
						<td>2.0×</td>
					</tr>
					<tr>
						<td>Kinetin (4.6 μM)</td>
						<td>3.5×</td>
					</tr>
					<tr>
						<td><strong>BAP (13.3 μM)</strong></td>
						<td><strong>5.9×</strong></td>
					</tr>
					<tr>
						<td>Trans-zeatin (9.1 μM)</td>
						<td>4.8×</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<p><strong>Recommended Protocol:</strong></p>
			<ul>
				<li><strong>Highest Multiplication:</strong> Use <Term abbr="BAP" /> at 13.3 μM (3 mg/L) for maximum shoot numbers</li>
				<li><strong>Best Quality:</strong> Use trans-zeatin at 9.1 μM (2 mg/L) for larger, higher-quality shoots (often double the size)</li>
				<li><strong>Medium Base:</strong> 1/3 strength MS salts with standard additives</li>
				<li><strong>Subculture:</strong> Transfer every 2-3 months to fresh medium</li>
				<li><strong>Culture Vessels:</strong> Magenta boxes with 20 mL medium</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="Step 5: Root Induction (3-7 weeks)">
		<p><strong>Rooting Medium Options:</strong></p>
		<table>
			<thead>
				<tr>
					<th>Treatment</th>
					<th>Composition</th>
					<th>Results</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Hormone-Free</strong></td>
					<td>1/3 strength <Term abbr="MS" /> salts • No <Term abbr="PGR" />s • Standard additives</td>
					<td>Roots appear in 3-4 weeks (S. leucophylla faster than S. purpurea)</td>
				</tr>
				<tr>
					<td><strong>With Auxin</strong></td>
					<td>1/3 strength <Term abbr="MS" /> salts • <Term abbr="NAA" /> 0.5 μM (0.1 mg/L) • Standard additives</td>
					<td>Slightly longer roots after 7 weeks</td>
				</tr>
			</tbody>
		</table>
		<p style="margin-top: 20px;"><strong>Protocol:</strong></p>
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-5-1" stepNumber="Transfer">
				Transfer shoot clusters (not individual shoots) from multiplication medium to rooting medium in Magenta boxes.
			</StepItem>
			<StepItem {protocolId} stepId="step-5-2" stepNumber="Incubation">
				Maintain at {convertTemp(25, $unitSystem)}-{convertTemp(26, $unitSystem)} under 16/8-hour photoperiod at ~30 μmol·m⁻²·s⁻¹.
			</StepItem>
			<StepItem {protocolId} stepId="step-5-3" stepNumber="Monitoring">
				S. leucophylla roots appear after ~3 weeks, S. purpurea after ~4 weeks. Wait until well-rooted (7 weeks total).
			</StepItem>
		</ol>
		<p style="margin-top: 20px;"><em><strong>Critical:</strong> Use shoot clusters, not individual shoots. Single shoots have poor survival in soil.</em></p>
	</ContentBlock>

	<ContentBlock title="Step 6: Acclimatization to Soil (3-4 weeks)">
		<p><strong>Soil Mix Formula:</strong></p>
		<ul>
			<li><strong>Base Mix (5 parts):</strong> 5 parts peatmoss : 3 parts milled sphagnum moss : 1 part builders sand</li>
			<li><strong>Cutting Mix (1 part):</strong> 4 parts perlite : 1 part milled sphagnum moss : 1 part pumice</li>
			<li><strong>Final Ratio:</strong> 5 parts Base Mix : 1 part Cutting Mix</li>
		</ul>
		<ol class="step-list">
			<StepItem {protocolId} stepId="step-6-1" stepNumber="Preparation">
				After 7 weeks in rooting medium, rinse shoot clusters gently to remove residual medium. Keep roots intact.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-2" stepNumber="Planting">
				Plant rooted shoot clusters in pre-moistened carnivorous plant soil mix. Use small pots initially.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-3" stepNumber="Humidity Control">
				Incubate under ~40 μmol·m⁻²·s⁻¹ light with 16/8-hour photoperiod. Maintain high humidity initially.
			</StepItem>
			<StepItem {protocolId} stepId="step-6-4" stepNumber="Establishment">
				After 3-4 weeks, all shoot clusters should show new pitcher and root growth. Survival rate: >80%.
			</StepItem>
		</ol>
		<p style="margin-top: 20px;"><strong>Success Rate:</strong> Research showed 100% survival after 1 month when using rooted shoot clusters. Individual shoots had poor survival.</p>
	</ContentBlock>

	<ContentBlock title="Advanced: Seed Cryopreservation">
		<p>For long-term conservation of endangered species, Sarracenia seeds can be stored in liquid nitrogen (–196°C).</p>
		<div style="background: #e8f4f8; padding: 20px; border-radius: 8px; margin-top: 20px;">
			<p><strong>Cryopreservation Protocol:</strong></p>
			<ul>
				<li><strong>Seed Moisture Content:</strong> 7-11% (natural dry storage level)</li>
				<li><strong>Method:</strong> Rapid immersion in liquid nitrogen (no pre-treatment needed)</li>
				<li><strong>Storage:</strong> Maintain in liquid N₂ (–196°C)</li>
				<li><strong>Recovery:</strong> Thaw rapidly and germinate using standard protocol</li>
			</ul>
			<p style="margin-top: 15px;"><strong>Results Across Species:</strong></p>
			<table>
				<thead>
					<tr>
						<th>Species</th>
						<th>Control Germination</th>
						<th>Post-Cryo Germination</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>S. leucophylla</td>
						<td>47.5%</td>
						<td>34.3%</td>
					</tr>
					<tr>
						<td>S. oreophila</td>
						<td>18%</td>
						<td>18%</td>
					</tr>
					<tr>
						<td>S. purpurea</td>
						<td>50%</td>
						<td>30%</td>
					</tr>
				</tbody>
			</table>
			<p style="margin-top: 15px;"><em>Differences were not statistically significant, indicating successful cryopreservation for long-term germplasm storage.</em></p>
		</div>
	</ContentBlock>

	<ContentBlock title="Complete Timeline & Success Metrics">
		<table>
			<thead>
				<tr>
					<th>Stage</th>
					<th>Duration</th>
					<th>Success Indicators</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><strong>Scarification</strong></td>
					<td>6 minutes</td>
					<td>Seed coat softened but not crushed; seeds intact</td>
				</tr>
				<tr>
					<td><strong>Germination</strong></td>
					<td>10-21 days</td>
					<td>Radicle emergence; 50-58% germination rate; no contamination</td>
				</tr>
				<tr>
					<td><strong>Shoot Multiplication</strong></td>
					<td>2-6 months</td>
					<td>4.8-5.9× multiplication per subculture; healthy green shoots</td>
				</tr>
				<tr>
					<td><strong>Root Induction</strong></td>
					<td>3-7 weeks</td>
					<td>Well-developed root systems on shoot clusters</td>
				</tr>
				<tr>
					<td><strong>Acclimatization</strong></td>
					<td>3-4 weeks</td>
					<td>>80% survival; new pitcher and root growth visible</td>
				</tr>
				<tr>
					<td><strong>Total Time</strong></td>
					<td>5-9 months</td>
					<td>Established plants ready for greenhouse or field planting</td>
				</tr>
			</tbody>
		</table>
	</ContentBlock>

	<ContentBlock title="Troubleshooting Guide" columns={2}>
		<div>
			<p><strong>Low Germination Rates:</strong></p>
			<ul>
				<li>Check acid scarification time—6 min is optimal</li>
				<li>Verify MS salt concentration (species-specific)</li>
				<li>Adjust pH to acidic range (4.5-5.7)</li>
				<li>Ensure seeds are fresh or properly stored</li>
				<li>Check light intensity and photoperiod</li>
			</ul>
			<p><strong>Seed Damage During Scarification:</strong></p>
			<ul>
				<li>Reduce acid exposure time (try 4-5 min)</li>
				<li>Use fine nylon fabric sieves for gentle handling</li>
				<li>Avoid excessive agitation during treatment</li>
			</ul>
		</div>
		<div>
			<p><strong>Poor Shoot Multiplication:</strong></p>
			<ul>
				<li>Switch to BAP (13.3 μM) for higher multiplication</li>
				<li>Use trans-zeatin (9.1 μM) for better shoot quality</li>
				<li>Ensure fresh medium every 2-3 months</li>
				<li>Verify proper light and temperature conditions</li>
			</ul>
			<p><strong>Acclimatization Failure:</strong></p>
			<ul>
				<li>Use shoot clusters, never individual shoots</li>
				<li>Ensure roots are well-developed (7 weeks minimum)</li>
				<li>Maintain high humidity during transition</li>
				<li>Use proper carnivorous plant soil mix (acidic, low nutrients)</li>
			</ul>
		</div>
	</ContentBlock>

	<ContentBlock title="Conservation Impact">
		<p>This protocol provides critical tools for conserving endangered Sarracenia species:</p>
		<ul>
			<li><strong>S. oreophila</strong> is federally endangered with limited wild populations</li>
			<li><strong>S. leucophylla</strong> and <strong>S. purpurea spp. venosa</strong> are endangered in several states</li>
			<li>Habitat destruction and overcollection threaten all species</li>
			<li>In vitro propagation enables sustainable multiplication without wild collection</li>
			<li>Cryopreservation provides long-term germplasm backup for genetic diversity</li>
			<li>Protocols support reintroduction programs and ex situ conservation</li>
		</ul>
		<p style="margin-top: 20px;"><em>All cultures have been maintained successfully for 2+ years with sustainable multiplication rates, demonstrating viability for long-term conservation programs.</em></p>
	</ContentBlock>
</ProtocolLayout>

<style>
	:global(.step-list) {
		list-style: none;
		padding: 0;
	}
</style>
