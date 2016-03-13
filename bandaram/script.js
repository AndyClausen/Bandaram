$(document).ready(function() {
    /*global game*/

    // Open/close windows from top-menu
    function toggleWindow(wnd) {
        if ($('#' + wnd + '-container').is(':visible'))
            $('.window-container').hide();
        else {
            $('.window-container').hide();
            $('#' + wnd + '-container').toggle();
        }
    }
    $('.top-menu-item').click(function() {
        var id = $(this).attr('id');
        toggleWindow(id);
    });

    // Prevent scrolling the body when scrolling in upgrades
    $.fn.scrollGuard = function() {
        return this.on('mousewheel', function(e) {
            var event = e.originalEvent;
            var d = event.wheelDelta || -event.detail;
            this.scrollTop += (d < 0 ? 1 : -1) * 30;
            e.preventDefault();
        });
    }; // List of divs with scrollguard:
    $('#upgrade-box-container').scrollGuard();

    // Upgrades

    // Venues

    // Fame

    // Skill-tree



    // Initialize design
    function initDesign() {
        $('#game').mousedown(function(e) {
            e.preventDefault();
        });
        $('#cash span').replaceWith('<span>' + game.values.cash.toFixed(2) + '</span>');
        $('#exp-singer span').replaceWith('<span>' + game.instruments.singer.exp + '/' + game.instruments.singer.nextLevel[game.instruments.singer.level] + '</span>');
        $('#exp-singer div').css('width', game.instruments.singer.exp / game.instruments.singer.nextLevel[game.instruments.singer.level] * 138);
        $('#singer-buttons .venue-text span ').replaceWith('<span>' + game.venues[game.instruments.singer.level] + '</span>');
        /*$('#upgrade-box-container').load('upgrades.html .singer-upgrade', function() {
            $('.upgrade-button').click(function() {
                var id = $(this).attr('id');
                console.log('ID: ' + id);
                if (game.upgrades[id][game.upgrades[id].level + 1] && game.values.cash >= game.upgrades[id][game.upgrades[id].level].price) {
                    game.values.cash -= game.upgrades[id][game.upgrades[id].level].price;
                    game.upgrades[id].level++;
                    game.design.refreshInstruments(id);
                    game.design.refreshCash();
                }
            });
        });*/
        game.design.refreshCash();
        game.design.refreshExp();
        game.design.refreshSkillpoints();
        game.design.refreshSkillpointsPlus();
        game.design.refreshInstruments();
        game.design.filterTabs('singer');
    }
    initDesign();

    // Practice/perform
    $('#singer-buttons .practice-button').click(function() { //////// Singer
        game.instruments.singer.practice();
    });
    $('.perform-button').click(function() {
        game.instruments.singer.perform();
    });


    // Upgrade/refresh
    $('.upgrade-button').click(function() {
        var id = $(this).attr('id');
        console.log('ID: ' + id);
        if (game.upgrades[id][game.upgrades[id].level + 1] && game.values.cash >= game.upgrades[id][game.upgrades[id].level].price) {
            game.values.cash -= game.upgrades[id][game.upgrades[id].level].price;
            game.upgrades[id].level++;
            game.design.refreshInstruments(id);
            game.design.refreshCash();
        }
    });
    /*
        $('#buy-guitar').click(function() {
            if (game.upgrades.guitar[game.upgrades.guitar.level + 1] && game.values.cash >= game.upgrades.guitar[game.upgrades.guitar.level].price) {
                if (game.instruments.singer.level >= game.upgrades.guitar[game.upgrades.guitar.level].reqLvl) {
                    game.values.cash -= game.upgrades.guitar[game.upgrades.guitar.level].price;
                    game.upgrades.guitar.level++;
                    game.design.refreshGuitar();
                    game.design.refreshCash();
                }
            }
        });

        $('#buy-drums').click(function() {
            if (game.upgrades.drums[game.upgrades.drums.level + 1] && game.values.cash >= game.upgrades.drums[game.upgrades.drums.level].price) {
                if (game.instruments.singer.level >= game.upgrades.drums[game.upgrades.drums.level].reqLvl) {
                    game.values.cash -= game.upgrades.drums[game.upgrades.drums.level].price;
                    game.upgrades.drums.level++;
                    game.design.refreshDrums();
                    game.design.refreshCash();
                }
            }
        });*/

    // Upgrade skillpoints
    $('.skillpointsplus').click(function() {
        var id = $(this).attr('id');
        var idLastPart = id.split('singer-')[1];
        if (game.skills.points > 0) {
            game.skills.points--;
            game.skills[idLastPart].level++;
            $('#' + idLastPart + '>span').replaceWith('<span>' + game.skills[idLastPart].level + '</span>');
            game.design.refreshSkillpoints();
            game.design.refreshSkillpointsPlus();
        }
    });

    // Venues

    $('#venues-container .arrow-left').click(function() {
        game.design.venueAnimation('left');
    });
    $('#venues-container .arrow-right').click(function() {
        game.design.venueAnimation('right');
    });

    // Tip hover
    $('.attributes').hover(function() {
        var id = $(this).attr('id');
        $('#skills-tip p').html(game.skills[id].tiptext());
        $(this).click(function() {
            $('#skills-tip p').html(game.skills[id].tiptext());
        });
    }, function() {
        $('#skills-tip p').html('*Hover over a skill to see a description and what bonuses it gives*');
    });

    setInterval(game.values.cashadd, 100);

    //easteregg
    var egged = false;
    $('#egg1').click(function() {
        egged = true;
    });
    $('#egg2').click(function() {
        if (egged) {
            game.values.cash += 1000000;
            $('#egg3 img').remove();
            $('#egg3').append('<img src="egg.gif" alt="eggs" height="350" width="350">').show();
            setTimeout(function() {
                $('#egg3').hide();
                $('#egg3 img').remove();
            }, 8000);
        }
    });
});
