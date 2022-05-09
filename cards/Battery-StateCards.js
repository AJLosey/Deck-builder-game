const bsFlare = new Card("Battery-State Flare Ship", "../cardimgs/Ammonite", "The smallest of the plasma-throwers of the stellar battery state, each flare produces a stream of white plasma capable of melting through the toughest alloy-platings in the galaxy. This switch away from traditional lasers allowed the SBS to crack through the various hyper-lane strongholds that used to make galactic war impractical.<br><br><i>There is no such thing as invincible. -General Odyim, SBS foreign acquisition general</i><br><br>Deals 8 damage on use, negates weaken or armor effects for 2 when held.", function () {
    changeEnemyHP(-8, true);
}, new Effect(() => {
    activeEffectArr.push(negateWeakenPlayer, 2, 0)
}));

const bsStarlink = new Card("Unstable Stellar-Link Reactor", "../cardimgs/Ammonite", "The namesake technology of the Stellar Battery-State is the ability to sink a hypergate into the heart of a star, sending masses of energy-dense plasma across the galaxy in hyperspace. The Stellar-Link Reactors carry the recieving end of these gates, and safely distribute the power to the surrounding fleet. The constant supply of extra energy makes the SBS a truly overwhelming force<br><br><i>What I would give to walk around the underbelly of one of those SBS portal ships. Oh, what kind of sound it must make! What noise does a star make when you pull out it's guts? Do they scream as they die? -Dr. Ibn Rustah II, head of entropic studies, Urth Labs </i><br><br>Explodes on use but only damages the player for half, explodes for full damage if destroyed, and increases energy by 1 when held.", function () {
    changeEnemyHP(-20, false);
    changePlayerHP(-10, false);
}, new Effect((value) => {
    energy(value)
    Object.defineProperty(card, 'explode', { value: 30 })
}, 1))

const bsHyperField = new Card("Battery-State Hyper-Field", "../cardimgs/Ammonite", "The impressive Hyper-Field generator on this ship creates a calculated pattern of miniature hyperspace lanes across fleet formations, allowing an SBS fleet to rapidly re-position themselves as their frontline ships cycle back to cool off and recharge. The proper use of stellar-links and hyper-fields can create long chains of unceasing, relentless attack. Where the galaxy was once diverse and fractured across hundreds of factions in an uneasy peace, the relentless fire in battle drove an equally relentless unification. Only a few stubborn holdouts remain between the SBS and true galactic peace under a single banner. The question remains if the SVS can adapt to the unconventional methods of the others, now thoroughly hardened by the wars between them.<br><br><i>The scatter-ships burn not just matter, but space. They know not how it sears, how it tortures us, or how it scars over, misshapen and malformed. They must learn. - , voice of the Void Calling</i><br><br>On use, draw cards to refill your hand.", function () {
    drawCards();
})

const bsOverloader = new Card("Battery-State Overloader", "../cardimgs/Ammonite", "The Battery-State Overloader draws enormous amounts of power from a nearby Stellar-Link Reactor. In an all-out gambit, this formidable ship uses it all to run 5 Betelgeuse-class plasma canons. It takes a while for a reactor to recover from this, but the overloader has a way of ending fights anyway.<br><br><br><i>General, your request to decomission the old model has been denied. Taking the risks and losing a few systems here and there is nothing. Remember how quickly the Qui'an surrendered at the mere sight of these things! -Fiarrah Doveny, head of navel assets depeartment, addressing General Sigham</i><br><br><br>On use, deals 35 damage, but reduces energy the next 2 turns.", function () {
    changeEnemyHP(-35, true);
    activeEffectArr.push(new Effect(energy, -1, 2))
})

