'use strict';

var usdToAudExchangeRate = 0.744;

// Against Malaria Foundation (AMF)
var amfCostPerNetUsd = 4.85;
var amfPeopleProtectedPerNet = 1.8;
var amfCostPerLifeSavedUsd = 3202.92;

// Deworm the World
var dtwCostPerChildDewormedUsd = 0.55

// Give GiveDirectly
var gdOverheadPercent = 0.18
var gdHouseholdYearlyIncomeUsd = 1220

// Schistosomiasis Control Initiative (SCI)
var sciCostPerChildProtectedUsd = 0.49

// Malaria Consortium
var mcCostPerChild = 4.76

// Input
var DATABASE = {
  "charities" : [
    {
    "name" : "Against Malaria Foundation",
    "id" : "amf",
    "overhead" : 0.000,
    "infoURL" : "https://effectivealtruism.org.au/charities",
    "donateURL" : "http://www.againstmalaria.com/Money.aspx?GroupID=86",
    "logo" : "e600",
    "organization" : "The " + buildUrl("https://www.againstmalaria.com/", "Against Malaria Foundation (AMF)") + " provides long-lasting insecticide-treated nets (LLINs) as protection against malaria. Malaria, transmitted via infected mosquitoes, kills just under half a million people every year according to the " + buildUrl("http://www.who.int/malaria/media/world-malaria-report-2016/en/", "World Health Organization (WHO)") + "; 70% of the deaths are of children under five. It is one of the world's largest killers of pregnant women, one of the leading causes of child deaths in Africa and a major obstacle to social and economic development in sub-Saharan Africa, where 90% of malaria deaths occur.",
    "recommendation" : "GiveWell, widely considered the most rigorous charity evaluator in the world, recommends AMF as one of their top charities based on their cost-effectiveness and transparency.'",
    "numbers" : "It costs around AUD 3.30 for " + buildUrl("https://www.againstmalaria.com/DollarsPerNet.aspx", "AMF to buy one LLIN") + ". When the costs of AMF's distribution partners are taken into account, it is estimated that AUD 6.50 will cover the cost of purchase and distribution of one LLIN. On average this will protect " + buildUrl("http://www.givewell.org/international/technical/programs/insecticide-treated-nets#HowcosteffectiveisLLINdistribution", "1.8 people for 2 to 3 years") + ". While it's difficult to accurately determine how much it costs for a program to save a life, the charity research organisation GiveWell has suggested that every AUD 4000 donated to AMF, causes health benefits equivalent to saving one life. All public donations to AMF are used exclusively to fund bed nets, so AMF has an effective overhead rate of 0% (non-net costs are fundraised for separately). <br/><br/> You can learn more about AMF in this " + buildUrl("https://effectivealtruism.org.au/node/43", "blog post") + ".",
    "pricePoints" :   [
        {
        "price" : amfCostPerNetUsd,
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/mosquitoNets.png",
        "color" : "green",
        "text" :   {
          "fraction": "*% of the cost of a bednet to protect against malaria",
          "single" : "Provide a bednet to protect against malaria...",
          "plural" : "Provide * bednets to protect against malaria..."
          }
        },
        {
        "price" : (amfCostPerNetUsd / amfPeopleProtectedPerNet),
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/helpingPeople.png",
        "color" : "red",
        "joiner" : "which",
        "text" :   {
          "fraction": "will protect someone for 2-3 years.",
          "single" : "will protect someone for 2-3 years.",
          "plural" : "will protect * people for 2-3 years."
          }
        },
        {
        "price" : amfCostPerLifeSavedUsd,
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/heartHands.png",
        "color" : "red",
        "joiner" : "which causes",
        "text" :   {
           "fraction" : "*% the cost of the health equivalent of saving a life, according to GiveWell.",
          "single" : "The health equivalent of saving a life, according to GiveWell.",
          "plural" : "The health equivalent of saving * lives, according to GiveWell."
          }
        }
      ]
    },

    {
    "name" : "Deworm the World",
    "id" : "deworm-the-world",
    "overhead" : 0.000,
    "infoURL" : "https://effectivealtruism.org.au/charities",
    "donateURL" : "/donate",
    "logo" : "e602",
    "organization" : buildUrl("https://www.evidenceaction.org/dewormtheworld/","Deworm the World Initiative") + " works with governments to support national school-based deworming programs that treat more than 160 million children for parasitic worm infections annually in India, Kenya, Vietnam, and Ethiopia. Deworm the World is one of the programs run by an organisation called Evidence Action. Evidence Action is dedicated to scaling up cost-effective interventions that are supported by rigorous evidence. They oversees three initiatives, however we have partnered with Evidence Action to help scale their deworming programs as these are considered to be " + buildUrl("http://www.givewell.org/charities/deworm-world-initiative", "particularly cost-effective") + ".",
    "recommendation" : "GiveWell, widely considered the most rigorous charity evaluator in the world, recommends Evidence Action as one of their top charities based on their cost-effectiveness and transparency.",
    "numbers" : "Deworm the World protects children from parasitic worms for an annual cost of between AUD 0.13 to AUD 0.73 per child, depending on geographic location. " + buildUrl("https://www.evidenceaction.org/dewormtheworld#the-evidence-for-deworming", "A randomized trial in Kenya") + " found that deworming reduced student absenteeism by 25%, increased future wage earnings by 23% and increased adult work hours by 12%. " + buildUrl("http://scholar.harvard.edu/files/kcroke/files/ug_lr_deworming_071714.pdf", "A recent study") + " from the Harvard School of Public Health found that students in deworming treatment areas performed better on literacy and numeracy tests as compared with other students 7-8 years after the end of their deworming treatment. A thorough discussion of the strengths and weaknesses of the evidence behind deworming can be found " + buildUrl("http://blog.givewell.org/2016/12/06/why-i-mostly-believe-in-worms/", "here") + ".<br/><br/> You can learn more about Deworm the World in this " + buildUrl("https://effectivealtruism.org.au/node/42", "blog post"),
    "pricePoints" :   [
        {
        "price" : dtwCostPerChildDewormedUsd,
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/helpingPeople.png",
        "color" : "red",
        "text" :   {
          "fraction": "*% of the cost of deworming one child",
          "single" : "Deworm a child",
          "plural" : "Deworm * children"
          }
        }
      ]
    },
    {
    "name" : "GiveDirectly",
    "id" : "givedirectly",
    "overhead" : gdOverheadPercent,
    "infoURL" : "https://effectivealtruism.org.au/charities",
    "donateURL" : "/donate",
    "logo" : "e606",
    "organization" : buildUrl("https://www.givedirectly.org/", "GiveDirectly") + " provides unconditional cash transfers to extremely poor households in Kenya and Uganda. Recipients are selected using objective criteria like housing material. GiveDirectly then transfers US$1,000 directly to recipients using mobile payments technology, and recipients use the money to pursue their own goals. " + buildUrl("https://www.givedirectly.org/research-at-give-directly", "Rigorous evaluation") + " has shown that recipients use their transfers for a range of purchases, including food, medical and education expenses, durables, home improvement, social events, iron roofs, livestock, and furniture.",
    "recommendation" : "GiveWell, widely considered the most rigorous charity evaluator in the world, recommends GiveDirectly as one of their top charities based on their cost-effectiveness and transparency.'",
    "numbers" : "Cash transfers are one of the most " + buildUrl("http://www.givewell.org/international/technical/programs/cash-transfers", "thoroughly researched") + " anti-poverty tools. Dozens of high-quality studies have found that cash transfers improve a range of outcomes including child health and schooling, nutrition, and income. GiveDirectly selects the extreme poor as recipients of their cash transfers. On average, a recipient lives on about " + buildUrl("http://www.givewell.org/charities/give-directly#CashRatios", "AUD 0.90 - 1.15 per day") + " which, when adjusting for differences in cost of living, is roughly equivalent to living on AUD 2.64 - 4.15 per day in Australia, with that amount covering all costs: food, rent, education, clothing, entertainment, utilities etc. GiveDirectly delivers approximately 88% of each donated dollar directly to recipients, and uses the remaining 12% of funds to cover all delivery costs including staff wages, transfer fees, cost of research and other costs traditionally considered \"overhead.\"<br/><br/> It's worth remembering that an Australian Dollar generally carries a lot more value overseas, especially in low-income countries. Even though 1 AUD exchanges for 2,500 Ugandan Shillings, you can buy a lot more with 2,500 shillings in Uganda, than you can with 1 dollar in Australia. In fact, having 2,500 shillings in Uganda is roughly equivalent to having AUD 3.50 in Australia. So, in donating to GiveDirectly you can effectively triple the value of your dollar. This effect is generally seen when you donate to organisations working in low-income countries, such as all our partner organisations. They can do more with your dollar.<br/></br> You can learn more about GiveDirectly in this " + buildUrl("https://effectivealtruism.org.au/blog/GiveDirectly-largest-basic-income-trial-history", "blog post") + ".",
    "pricePoints" :   [
        {
        "price" : 1.000,
        "fractionType" : "currency",
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/giving.png",
        "color" : "green",
        "text" :   {
          "fraction": "Provide 0.* USD cash directly to people to use as they wish.",
          "single" : "Provide 1 USD cash directly to people to use as they wish.",
          "plural" : "Provide * USD cash directly to people to use as they wish."
          }
        },
        {
        "price" : gdHouseholdYearlyIncomeUsd,
        "fractionType" : "percent",
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/family.png",
        "color" : "green",
        "joiner" : "or",
        "text" :   {
          "fraction": "*% of the cost of funding one household with a cash grant equivalent to a year's income.",
          "single" : "Fund a household with a cash grant equivalent to a year's income.",
          "plural" : "Fund * households with a cash grant equivalent to a year's income."
          }
        }
      ]
    },
    {
    "name" : "Schistosomiasis Control Initiative",
    "id" : "sci",
    "overhead" : 0.000,
    "infoURL" : "https://effectivealtruism.org.au/charities",
    "donateURL" : "/donate",
    "logo" : "e60e",
    "organization" : "Worms and other parasitic and bacterial Neglected Tropical Diseases (NTDs) affect two billion people worldwide, most of whom live on less than $2 a day. The most deadly of these is " + buildUrl("http://www.who.int/mediacentre/factsheets/fs115/en/", "schistosomiasis") + ", which the WHO estimates is responsible for 200,000 deaths a year. Another 300 million, roughly the population of the United States, suffer from severe illness, and half of those are school-aged children. NTDs are responsible for a range of serious health problems from malnutrition, to impaired cognitive development, to blindness. They can increase the morbidity and mortality of malaria, tuberculosis and HIV/AIDS, and infected children are often too sick to attend school. " + buildUrl("https://www.imperial.ac.uk/schistosomiasis-control-initiative","Schistosomiasis Control Initiative (SCI)") + " works with governments across sub-Saharan Africa to create or scale up mass school-based deworming programs, which have a strong track record of success. These programs provide school children with pills that protect against the most prevalent NTDs.",
    "recommendation" : "GiveWell, widely considered the most rigorous charity evaluator in the world, recommends SCI as one of their top charities based on their cost-effectiveness and transparency.",
    "numbers" : "GiveWell estimates that the cost per child treated through SCI's programs is AUD 0.65, although this price doesn't include the government contribution to the program or the cost of the drugs, which are usually donated by the manufacturers. There is " + buildUrl("http://www.givewell.org/international/technical/programs/deworming#What_are_the_benefits_of_mass_deworming", "evidence") + " that mass-deworming programs improve educational outcomes and children's future earning potential. " + buildUrl("http://scholar.harvard.edu/files/kcroke/files/ug_lr_deworming_071714.pdf", "A recent study") + " from the Harvard School of Public Health found that students in deworming treatment areas performed better on literacy and numeracy tests as compared with other students 7-8 years after the end of their deworming treatment. A thorough discussion of the strengths and weaknesses of the evidence behind deworming can be found " + buildUrl("http://blog.givewell.org/2016/12/06/why-i-mostly-believe-in-worms/","here") + ". <br/><br/>You can learn more about the Schistosomiasis Control Initiative in this " + buildUrl("https://effectivealtruism.org.au/node/42", "blog post") + ".",
    "pricePoints" :   [
        {
        "price" : sciCostPerChildProtectedUsd,
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/medical.png",
        "color" : "red",
        "text" :   {
          "fraction": "*% of the cost of protecting a child from schistosomiasis for 1 year.",
          "single" : "Protect a child from schistosomiasis for 1 year.",
          "plural" : "Protect * children from schistosomiasis for one year."
          }
        }
      ]
    },
    {
    "name" : "Malaria Consortium",
    "id" : "malaria-consortium",
    "overhead" : 0.000,
    "infoURL" : "https://effectivealtruism.org.au/charities",
    "donateURL" : "/donate",
    "logo" : "e60e",
    "organization" : buildUrl("http://www.malariaconsortium.org/", "Malaria Consortium") + " conducts a range of programs for the prevention, control and treatment of malaria and other communicable diseases. Malaria, a disease transmitted via infected mosquitoes, kills just under " + buildUrl("http://www.who.int/malaria/media/world-malaria-report-2016/en/", "half a million people every year") + ", with children under five the most vulnerable to infection. Part of Malaria Consortium's approach to malaria prevention is supporting seasonal malaria chemoprevention (SMC) programs in areas where the malaria burden is particularly high for a few months of the year, an approach " + buildUrl("http://www.who.int/malaria/publications/atoz/who_smc_policy_recommendation/en/", "recommended by the World Health Organization") + ". We have partnered with Malaria Consortium to support SMC programs as these are considered " + buildUrl("http://www.givewell.org/international/technical/programs/seasonal-malaria-chemoprevention", "to be particularly cost-effective") + ".",
    "recommendation" : "GiveWell, widely considered the most rigorous charity evaluator in the world, recommends Malaria Consortium as one of their top charities based on their cost-effectiveness and transparency.",
    "numbers" : "Malaria Consortium focuses its SMC programs in the Sahel region of Africa, where the majority of malaria infections occur in the four-month long rainy season. The cost of protecting a child from malaria in this period is estimated to be between " + buildUrl("http://www.givewell.org/charities/malaria-consortium#Cost_for_SMC_coverage", "AUD 4.64 and AUD 8.16") + ". " + buildUrl("https://www.mmv.org/sites/default/files/uploads/docs/access/SMC_Tool_Kit/publications/Meremikww-ipt-review.pdf", "Scientific reviews") + " suggest that SMC programs are effective in reducing cases of malaria, preventing around 75% of cases, including severe cases. It is estimated that over " + buildUrl("http://www.who.int/malaria/areas/preventive_therapies/children/en/", "25 million children") + " in the Sahel region would benefit from SMC. However, many children are not currently being reached due to current " + buildUrl("http://www.givewell.org/charities/malaria-consortium#GlobalNeed", "lack of funds") + ".",
    "pricePoints" :   [
        {
        "price" : mcCostPerChild,
        "fractionType": "percent",
        "iconURL" : "https://raw.githubusercontent.com/RHoKAustralia/effective-altruism-australia/master/Donation%20calculator/img/results/medical.png",
        "color" : "red",
        "text" :   {
          "fraction": "*% of the cost of protecting a child from malaria for 1 year.",
          "single" : "Protect a child from malaria for 1 year.",
          "plural" : "Protect * children from malaria for one year."
          }
        }
      ]
    }
  ]
};



// DOM Ready
$(function() {

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
              console[method] = noop;
          }
      }

    // Extend jQuery .on() & .bind() handlers with delay argument, for smooth resizing
    // Usage = .on('resize', function(){}, 100);
    (function($) {
      var bindings = { on: $.fn.on, bind: $.fn.bind };
      $.each(bindings, function(k){
        $.fn[k] = function () {
          var args = [].slice.call(arguments),
            delay = args.pop(),
            fn = args.pop(),
            timer;

          args.push(function () {
            var self = this,
              arg = arguments;
            clearTimeout(timer);
            timer = setTimeout(function(){
              fn.apply(self, [].slice.call(arg));
            }, delay);
          });

          return bindings[k].apply(this, isNaN(delay) ? arguments : args);
        };
      });
    })(jQuery);

    // Animate all anchors
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 30
          }, 300);
          return false;
        }

      }
    });

  });

/*eslint no-unused-vars: 0 */
'use strict';

// Constants
var AMOUNT_INPUT = '.amount__input',
    CHARITY_SELECT = '.charities';

/**
 * Builds a URL
 * @param  {link} the URL
 * @param  {anchor} the anchor text
 */
function buildUrl(link, anchor)
{
  return '<a href="' + link + '">' + anchor + '</a>';
}

/**
 * Fetch URL parameters
 * @return {object} All paramaters from the URL
 */
function getParams() {
  var params = {};

  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		params[key] = value;
	});

	return params;
}

/**
 * Get a charity from JSON data
 * @param  {object} charities Object with property charities
 * @param  {string} id        ID of charity
 * @return {object}           Charity data
 */
function getCharity(data, id) {
  var charities = data.charities,
      index;

  index = charities.map(function(charity) {
    return charity.id;
  }).indexOf(id);

  return index === -1 ? false : charities[index];
}

/**
 * Set input values
 * @param  {object} params URL parameters
 */
function setValues(params) {
  if (params.amount) {
    $(AMOUNT_INPUT).val(params.amount);
  }

  if (params.charity) {
    $('.charities [data-id="' + params.charity + '"]').trigger('click');
  }
}

/**
 * Get JSON data and store it in a cache if it's already been fetched
 * @param  {function} callback Callback to perform on data
 */
var getData = (function() {
  var cache = DATABASE;

  return function(callback) {
    if (cache) {
      callback(cache);
      return;
    }

    $.getJSON('json/charities.json', function(data) {
      cache = data;
      callback(data);
    })
    .fail(function(data, textStatus, error) {
      console.error('Could not load charities.json, status: ' + textStatus + ', error: ' + error);
    });
  };
})();

/**
 * Build charity selector(s) based on JSON data
 * @param  {object} data   JSON data containing charities
 * @param  {string} select jQuery selector of charities <select>
 */
function buildSelector(data) {
  var toolbar = CHARITY_SELECT + '--toolbar',
      titlebar = CHARITY_SELECT + '--titlebar';

  // Append charities
  data.charities.forEach(function(charity){
    $(toolbar).append('<option class="charities__charity" value="' + charity.id + '" data-icon="&#x' + charity.logo + ';">' + charity.name);
    $(titlebar).append('<span class="charities__charity charities__charity--titlebar" data-id="' + charity.id + '" data-icon="">' + charity.name + '</span>');
  });

  // Replace the default select
  var select = $(toolbar).dropkick({
    mobile: true,
    change: function(){
      $(toolbar).trigger('input');
    }
  });

  $(CHARITY_SELECT + ' .dk-option').each(function(i){
    $(this).attr('data-icon', $(CHARITY_SELECT + ' option').eq(i).attr('data-icon') );
  });

  // Sync the selects
  $('.charities__charity').click(function(){
    var id = $(this).data('id') || $(this).data('value'),
        titleSelected = $('.charities__charity--titlebar[data-id="' + id + '"]');

    $(titleSelected).siblings().removeClass('charities__charity--selected');
    $(titleSelected).addClass('charities__charity--selected');

    if ($(this).hasClass('charities__charity--titlebar')){
      select.dropkick('select', id);
    }

  });

  // Sync the inputs
  $(AMOUNT_INPUT).on('input', function() {
    var val = $(this).val();

    if ($(this).hasClass('amount__input--titlebar')){
      $(AMOUNT_INPUT + '--toolbar').val(val);
    } else {
      $(AMOUNT_INPUT + '--titlebar').val(val);
    }
  });
}

/**
 * Calculate the impact results
 * @param  {object} charity JSON object containing charity data
 * @param  {number} amount  Amount donated to charity
 * @return {array}          Impacts from donation
 */
function calcImpact(charity, amount) {
  var impacts = [],
      overhead,
      usableDonation,
      exchangeRate,
      localisedAmount;

  // localise the input
  localisedAmount = amount * usdToAudExchangeRate;

  // Calculate usable donation
  overhead = 1.0 - charity.overhead;
  usableDonation = overhead * localisedAmount;

  charity.pricePoints.forEach(function(pricePoint){

    var impactAmount = usableDonation / pricePoint.price;
    var pricePointText;

    if(impactAmount < 1)
    {
      pricePointText = pricePoint.text.fraction;
      // If the impact amount is less than 1%, show 2 decimal places,
      // otherwise, use a whole number.
      impactAmount = (impactAmount < 0.01) ? (impactAmount * 100).toFixed(2): Math.floor(impactAmount * 100);
    } else if (impactAmount < 2) {
      pricePointText = pricePoint.text.single;
      impactAmount = Math.floor(impactAmount);
    }  else {
      pricePointText = pricePoint.text.plural;
      impactAmount = Math.floor(impactAmount);
    }

    impacts.push({
      amount: impactAmount,
      text: pricePointText,
      icon: pricePoint.iconURL,
      joiner: pricePoint.joiner || false,
      color: pricePoint.color
    });

  });

  return impacts;
}

/**
 * Write outputted data to the DOM
 * @param  {object} charity   JSON object containing charity data
 * @param  {array} impacts    Array of objects containing impact values
 * @param  {object} elements  jQuery selectors to write to
 */
function writeCharity(charity, elements){

  // Write charity info
  $(elements.organization).html(charity.organization);
  $(elements.numbers).html(charity.numbers);
  $(elements.recommendation).html(charity.recommendation);

  // Write link hrefs to DOM
  $(elements.donate).attr('href', charity.donateURL);
  $(elements.info).attr('href', charity.infoURL);
}

/**
 * Writes individual result outputs to the DOM
 * @param  {object} charity   JSON object containing charity data
 * @param  {array} impacts   Array of objects containing impact values
 * @param  {object} elements  jQuery selectors to write to
 */
function writeResults(charity, impacts, elements){

  var currencySymbol = '$',
      currencyCode = 'AUD';

  if (typeof geoplugin_currencySymbol === 'function') {
    currencySymbol = geoplugin_currencySymbol();
    currencyCode = geoplugin_currencyCode()
  };

  // Write intro text
  $(elements.intro).html('A$ ' + $(AMOUNT_INPUT).val() + '  to ' + charity.name + ' can');

  // Start with a fresh slate
  $(elements.results).empty();

  // Write impacts
  impacts.forEach(function(impact, i){
    var impactText = impact.text,
        resultHTML,
        result,
        joiner;

    resultHTML = '<div class="result"><img class="result__icon" src="' + impact.icon + '" /></div>';
    impactText = impactText.replace(/[*]/, impact.amount.toString());
    result = '<p class="result__content" data-color="' + impact.color + '">' + impactText + '</p>';
    joiner = '<span class="result__joiner">' + impact.joiner + '</span>';

    // Check if last result was null, then stop
    if (i > 0 && impacts[i - 1].amount === '') {
      return;
    }

    // Check if we're overwriting a results or creating new ones
    if ($('.result').eq(i).length){
      $('.result').eq(i).replaceWith(resultHTML);
    } else {
      $(elements.results).append(resultHTML);
    }

    // Check if we're replacing or adding the result
    if ($('.result').eq(i).children('.result__content').length){
      $('.result').eq(i).children('.result__content').replaceWith(result);
    } else {
      $('.result').eq(i).append(result);
    }

    // Add the joiner, if it exists
    if (impact.joiner) {
      // Check if we're replacing or adding it
      if ($('.result').eq(i).children('.result__joiner').length){
        $('.result').eq(i).children('.result__joiner').replaceWith(joiner);
      } else {
        $('.result').eq(i).append(joiner);
      }
    }
  });
}

/*eslint block-scoped-var: 0, no-undef: 0 */
'use strict';

// DOM Ready
$(function(){

  // Toolbar scroll
  $('.ic-content').waypoint(function(direction){
    if (direction === 'down') {
      $('.toolbar').addClass('toolbar--scroll');
    } else {
      $('.toolbar').removeClass('toolbar--scroll');
    }
  }, {
    offset: 100
  });

  // Build the charity selectors
  getData(function(data){
    var params = getParams();
    buildSelector(data);
    setValues(params);
  });

  // Localise currency symbol
  var currencySymbol = 'A$';
  if (typeof geoplugin_currencySymbol === 'function') {
    $('<textarea />').html(geoplugin_currencySymbol()).text();
  }
  $('.amount').attr('data-currency', currencySymbol);

  // Run the impact calc
  getData(function(data){
    var charity,
        impacts,
        amount,
        select,
        elements;

    amount = AMOUNT_INPUT + '--toolbar';
    select = 'select' + CHARITY_SELECT;

    // Map out the selectors we're using
    elements = {
      intro: '#intro-text',
      results: '#results',
      organization: '#organization-content',
      numbers: '#numbers-content',
      recommendation: '#recommendation-content',
      donate: '#donate',
      learnMore: '#learnmore',
      info: '#learnmore'
    };

    // Set up helper functions
    var processAll = function() {
      // Fetch the individual charity
      charity = getCharity(data, $(select).val());

      // Calculate the impacts
      impacts = calcImpact(charity, $(amount).val());

      // Write to the DOM
      writeCharity(charity, elements);
      writeResults(charity, impacts, elements);
    };

    var processResult = function() {
      // Fetch data
      charity = getCharity(data, $(select).val());
      impacts = calcImpact(charity, $(amount).val());

      // Write to the DOM
      writeResults(charity, impacts, elements);
    };


    // Update the whole calc if charity changes
    $(select).on('input', function() {
      // Only run if we have both values
      if ($(amount).val() && $(select).val()) {
        // Do the swaparoo
        if ($('.placeholder').css('display') !== 'none'){
          $('.placeholder').fadeOut(150, function(){
            processAll();
            $('.ic-output').fadeIn(150);
            $('html, body').animate({ scrollTop: $('.ic-content').offset.top - 80 }, 300);
          });
        } else {
          $('.ic-output').fadeOut(150, function(){
            processAll();
            $(this).fadeIn(150);
          });
        }

      }
    });

    // Only update result if amount changes
    $(AMOUNT_INPUT).on('input', function() {

      // Only run if we have both values
      if ($(amount).val() && $(select).val()) {

        // Do the swaparoo
        if ($('.placeholder').css('display') !== 'none'){
          $('.placeholder').fadeOut(150, function(){
            processAll();
            $('.ic-output').fadeIn(150);
            $('html, body').animate({ scrollTop: $('.ic-content').offset().top - 80 }, 300);
          });
        } else {
          processResult();
        }

      }
    });

  });

});