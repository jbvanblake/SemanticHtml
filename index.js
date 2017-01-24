let tabs = {
  "Account":[
    "Summary",
    "Subscription",
    "Billing",
  ],
  "Security and Authentication":[
    "High Security",
    "High Security",
    "High Security",
  ],"Account":[
    "Summary",
    "Subscription",
    "Billing",
  ],
  "Security and Authentication":[
    "High Security",
    "High Security",
    "High Security",
  ]
};


populateTabs(tabs);
setUpEventListeners();


function setUpEventListeners(){
  $(".upgrade").click(showUpgrade);
  $(".upgrade").click(showUpgrade);

  $(".sub-nav").click((e)=>{
    $(".sub-nav.selected").removeClass("selected");
    $(e.currentTarget).addClass("selected")
  });

  $(".subscription-level select").change((e)=>{
   
    let val = $(e.currentTarget).val();
    $(".subscription-cu").removeClass("disabled");
    $(".subscription-cu input").attr("disabled", false);

    if(val === "pro"){
       $(".subscription-cu input").attr("min", "5500");
    }
    else{
      $(".subscription-cu input").attr("min", "0");
    }

  });

  $(".subscription-cu input").blur((e)=>{
    if(!e.currentTarget.checkValidity()){
      $(".subscription-cu .restraint").addClass("error");
    }
    else{
      $(".subscription-cu .restraint").removeClass("error");
    }


  });

}


function showUpgrade(){
 $(".subscription-home").hide();
 $(".upgrade-home").show();
}
function showSubscription(){
 $(".subscription-home").show();
 $(".upgrade-home").hide();
}

function populateTabs(tabs){
  let superTabTemplate = _.template("<div class='super-nav'><label><%=tabName%></label><%=subTabs%></div>");
  let subTabTemplate = _.template("<div class='sub-nav'data-nav=<%=tabName%>><label><%=tabName%></label></div>");

  let navHtml = "";
  for(tab in tabs){
    let children = tabs[tab].map(subTab => subTabTemplate({tabName:subTab}));

    navHtml += superTabTemplate({tabName:tab, subTabs:children.join("")});
  }

 $("#navigation").html(navHtml);
 $("#navigation [data-nav='Subscription']").addClass("selected");
 $("#navigation [data-nav='Subscription']").click(showSubscription);

}

