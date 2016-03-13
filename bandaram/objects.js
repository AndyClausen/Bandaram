/*
    This will contain all basic variables and methods all compressed into one
    object containing other objects as categories. Inspired by the structure
    of config.js at github.com/Trimps (thanks Zach).
*/

//http://academiaandroid.com/wpaa/wp-content/uploads/2015/03/microphone11-2.png
//http://i418.photobucket.com/albums/pp261/mine559/lg_guitar.png
//http://junctionbeats.com/wp-content/uploads/2015/11/drum-icon1.png


function newGame() {
    var toReturn = {
        global: {
            version: 0.1,
            beta: true
        },
        values: {
            cash: 0,
            cashadd: function() {
                var totalBonus = (game.upgrades.recorder[game.upgrades.recorder.level].bonusval + game.upgrades.guitar[game.upgrades.guitar.level].bonusval + game.upgrades.recorder[game.upgrades.recorder.level].bonusval) / 10;
                game.values.cash += totalBonus;
                game.design.refreshCash();
                game.design.refreshInstruments();
                game.design.refreshSkillpoints();
                game.design.refreshSkillpointsPlus();
            }
        },
        upgrades: {
            // Singer
            microphone: {
                0: { // Level 0
                    price: 2, // Price to buy next level
                    name: 'No Microphone',
                    bonusval: 0,
                    bonus: function() {
                        return 'None';
                    },
                    reqLvl: 0
                },
                1: { // Level 1, etc.
                    price: 4,
                    name: 'Broken Microphone',
                    bonusval: 0.05,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 1
                },
                2: {
                    price: 6,
                    name: 'Decent Microphone',
                    bonusval: 0.10,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 2
                },
                3: {
                    price: 8,
                    name: 'Cool Microphone',
                    bonusval: 0.5,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 3
                },
                4: {
                    price: 10,
                    name: 'Dope Microphone',
                    bonusval: 1.00,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 4
                },
                id: 'microphone',
                img: 'mic.png',
                level: 0
            },
            recorder: {
                0: { // Level 0
                    price: 2, // Price to buy next level
                    name: 'No Recorder',
                    bonusval: 0,
                    bonus: function() {
                        return 'None';
                    },
                    reqLvl: 0
                },
                1: { // Level 1, etc.
                    price: 4,
                    name: 'Broken Recorder',
                    bonusval: 0.05,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 1
                },
                2: {
                    price: 6,
                    name: 'Decent Recorder',
                    bonusval: 0.10,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 2
                },
                3: {
                    price: 8,
                    name: 'Cool Recorder',
                    bonusval: 0.5,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 3
                },
                4: {
                    price: 10,
                    name: 'Dope Recorder',
                    bonusval: 1.00,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 4
                },
                id: 'recorder',
                img: 'mic.png',
                level: 0
            },

            guitar: {
                0: { // Level 0
                    price: 2, // Price to buy next level
                    name: 'No Guitar',
                    bonusval: 0,
                    bonus: function() {
                        return 'None';
                    },
                    reqLvl: 1
                },
                1: { // Level 1, etc.
                    price: 4,
                    name: 'Broken Guitar',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 2
                },
                2: {
                    price: 6,
                    name: 'Decent Guitar',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 3
                },
                3: {
                    price: 8,
                    name: 'Chill Guitar',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 4
                },
                4: {
                    price: 10,
                    name: 'Nice Guitar',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 5
                },
                id: 'guitar',
                img: 'https://static.e-junkie.com/sslpic/159066.a0f831864edeed8ad500c0fbea5f49f7.jpg',
                level: 0
            },
            drums: {
                0: { // Level 0
                    price: 2, // Price to buy next level
                    name: 'No Drums',
                    bonusval: 0,
                    bonus: function() {
                        return 'None';
                    },
                    reqLvl: 2
                },
                1: { // Level 1, etc.
                    price: 4,
                    name: 'Drum pad',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 3
                },
                2: {
                    price: 6,
                    name: 'Busted Snare Drum',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 4
                },
                3: {
                    price: 8,
                    name: 'Junior Drum Set',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 5
                },
                4: {
                    price: 10,
                    name: 'Sick Ass Drum Set',
                    bonusval: 2,
                    bonus: function() {
                        return 'Selling CPS: $' + this.bonusval;
                    },
                    reqLvl: 6
                },
                id: 'drums',
                img: 'https://static.e-junkie.com/sslpic/159066.a0f831864edeed8ad500c0fbea5f49f7.jpg',
                level: 0
            }
        },
        instruments: {
            singer: {
                practice: function() {
                    if (!this.practicing) {
                        this.practicing = true;
                        game.design.refreshPracticebar();
                    }
                },
                practiceTime: 0.2,
                perform: function() {
                    game.values.cash += 0.1 * game.skills.dancemoves.bonus();
                    game.instruments.singer.exp++;
                    game.design.refreshCash();
                    game.design.refreshExp();
                    game.design.refreshInstruments();
                },
                practicing: false,
                exp: 0,
                expMultiplier: 1,
                expMin: 10,
                expMax: 20,
                level: 0,
                nextLevel: [50, 200, 400, 700, 1000, 1400, 1800, 2300, 2800, 3500, 1000000]
            }
        },
        skills: {
            vibrato: {
                level: 0,
                bonus: function(level) {
                    if (level === undefined) {
                        level = this.level;
                    }
                    return level * 0.5 + 1;
                },
                tiptext: function() {
                    return 'Vibrato makes your voice powerful and helps you control it better. Exp gained from practicing is vibrated up with +25% per level.<br><span>Current bonus: +' + this.level * 50 + '% exp</span>';
                }
            },
            dancemoves: {
                level: 0,
                bonus: function(level) {
                    if (level === undefined) {
                        level = this.level;
                    }
                    return level * 0.5 + 1;
                },
                tiptext: function() {
                    return 'Improve your dance moves to make the girls go crazy at your concerts. Boosts your cash gained from performing by +25% per level.<br><span>Current bonus: +' + this.level * 50 + '% cash</span>';
                }
            },
            intonation: {
                level: 0,
                bonus: function(level) {
                    if (level === undefined) {
                        level = this.level;
                    }
                    return level * 0.5 + 1;
                },
                tiptext: function() {
                    return 'Nothing makes your ears jizz more than a perfect intonation, so don\'t feel bad about increasing song prices with +50% per level.<br><span>Current bonus: +' + this.level * 50 + '% sales income</span>';
                }
            },
            rhythm: {
                level: 0,
                bonus: function(level) {
                    if (level === undefined) {
                        level = this.level;
                    }
                    return level * 0.5 + 1;
                },
                tiptext: function() {
                    return 'With a good rhythm it\'s a lot easier to get a tight recording. The speed of recording a song is increased with +50% per level.<br><span>Current bonus: +' + this.level * 50 + '% recording speed</span>';
                }
            },
            points: 0
        },
        venues: ["Dark Alley", "Small Street", "Boulevard", "Main Road", "Small Square", "Medium Square", "Town Square", "Small Cafe", "Søhesten", "BIG CAFE", "ROSKILDE", "Brazil"],
        design: {
            refreshCash: function() {
                $('#cash span').replaceWith('<span>' + game.values.cash.toFixed(2) + '</span>');
            },
            refreshExp: function() {
                while (game.instruments.singer.exp >= game.instruments.singer.nextLevel[game.instruments.singer.level]) {
                    game.instruments.singer.level++;
                    game.skills.points++;
                }
                $('#upgrade-skills span').replaceWith('<span>' + '+' + game.skills.points + '</span>');
                $('#exp-singer span').replaceWith('<span>' + game.instruments.singer.exp.toFixed(0) + '/' + game.instruments.singer.nextLevel[game.instruments.singer.level] + '</span>');
                $('#exp-singer div').css('width', game.instruments.singer.exp.toFixed(0) / game.instruments.singer.nextLevel[game.instruments.singer.level] * 138);
            },
            refreshPracticebar: function() {
                var refreshTime = game.instruments.singer.practiceTime * 50;
                (function repeat(i) {
                    setTimeout(function() {
                        $('.practice-bar').css('width', 100 - (i - 1) / refreshTime * 100 + '%');
                        if (--i) repeat(i);
                        else {
                            $('.practice-bar').css('width', '0');
                            game.instruments.singer.practicing = false;
                            game.design.expNoteAnimation();
                            game.design.refreshCash();
                            game.design.refreshExp();
                            if ($('#level-singer span').html() < game.instruments.singer.level) {
                                $('#level-singer span').replaceWith('<span>' + game.instruments.singer.level + '</span>');
                                $('#level-singer span').addClass('level-up');
                                setTimeout(function(){
                                    $('#level-singer span').removeClass('level-up');
                                }, 4000);
                            }
                        }
                    }, 20);
                })(refreshTime);
            },
            expNoteAnimation: function() {
                var rnd = Math.random();
                var amt = Math.floor((rnd * (game.instruments.singer.expMax - (game.instruments.singer.expMin - 1)) + game.instruments.singer.expMin) * game.skills.vibrato.bonus());
                game.instruments.singer.exp += amt;

                $('#exp-notes-singer span').remove();
                $('<span style="position: relative;top: 48px;">+' + amt + '</span>').appendTo('#exp-notes-singer').animate({
                    opacity: 0,
                    top: '-=30'
                }, 1000, 'linear', function() {});
            },
            refreshSkillpoints: function() {
                if (game.skills.points > 0) {
                    $('.skillpoints').show();
                    $('#upgrade-skills span').replaceWith('<span>' + '+' + game.skills.points + '</span>');
                }
                else
                    $('.skillpoints').hide();
            },
            refreshSkillpointsPlus: function() {
                if (game.skills.points > 0)
                    $('.skillpointsplus').show();
                else
                    $('.skillpointsplus').hide();
            },

            //////////VENUE ANIMATION////////////
            venueAnimation: function(direction) {
                var venuemax = $('.venue').length - 1;
                if (direction == 'left') {
                    $('#venue-showcase').transition({
                        x: '+=' + 100 / (venuemax + 1) + '%'
                    }, 500, 'ease');
                    this.venueview--;
                    if (this.venueview == venuemax - 1) {
                        $('#venues-container .arrow-right').show();
                    }
                    if (this.venueview == 0) {
                        $('#venues-container .arrow-left').hide();
                    }
                }
                else if (direction == 'right') {
                    $('#venue-showcase').transition({
                        x: '-=' + 100 / (venuemax + 1) + '%'
                    }, 500, 'ease');
                    this.venueview++;
                    if (this.venueview == 1) {
                        $('#venues-container .arrow-left').show();
                    }
                    if (this.venueview == venuemax) {
                        $('#venues-container .arrow-right').hide();
                    }
                }
                $('#singer-buttons .venue-text span').replaceWith('<span>' + game.venues[game.design.venueview] + '</span>');
            },
            venueview: 0,

            //////////REFRESH RECORDER////////////
            refreshInstruments: function(id1) {
                function refresh(id) {
                    $('#' + id + '-upgrades h3').replaceWith("<h3>" + game.upgrades[id][game.upgrades[id].level].name + "</h3>");
                    $('#' + id + '-upgrades img').replaceWith("<img src='" + game.upgrades[id].img + "'>");
                    $('#' + id + '-upgrades .bonus p').replaceWith("<p>" + game.upgrades[id][game.upgrades[id].level].bonus() + "</p>");

                    if (game.upgrades[id][game.upgrades[id].level + 1]) {
                        $('#' + id + '-upgrades .pricetag').replaceWith("<span class='pricetag'>Price: $" + game.upgrades[id][game.upgrades[id].level].price + "</span>");
                        $('#' + id + '-upgrades .reqLvl').replaceWith("<span class='reqLvl'>reqLvl: " + game.upgrades[id][game.upgrades[id].level].reqLvl + "</span>");
                        $('#' + id + '-upgrades .next p').replaceWith("<p>" + game.upgrades[id][game.upgrades[id].level + 1].name + "</p>");
                        if (game.values.cash < game.upgrades[id][game.upgrades[id].level].price)
                            $('#' + id + '-upgrades .pricetag').css('color', 'red');
                        else
                            $('#' + id + '-upgrades .pricetag').css('color', 'grey');
                        if (game.upgrades[id][game.upgrades[id].level].reqLvl > game.instruments.singer.level)
                            $('#' + id + '-upgrades .reqLvl').css('color', 'red');
                        else
                            $('#' + id + '-upgrades .reqLvl').css('color', 'white');
                    }
                    else {
                        $('#' + id + '-upgrades .pricetag').replaceWith("<span class='pricetag'>Price: Maxed</span>");
                        $('#' + id + '-upgrades .pricetag').css('color', '#D4AF37');
                        $('#' + id + '-upgrades .next p').replaceWith("<p>???</p>");
                        $('#' + id + '-upgrades .reqLvl').css('display', 'none');
                    }
                    if (game.upgrades[id].level > 0)
                        $('#' + id + '-upgrades h3').css('color', 'green');
                }
                if (id1 === undefined) {
                    for (var key in game.upgrades) {
                        refresh(key);
                    }
                }
                else {
                    refresh(id1);
                }
            },
            filterTabs: function(what) {
                this.toggleTab(this.selectedTab, false);
                this.selectedTab = what;
                this.toggleTab(what, true);
                var tabs = ["singer", "guitar", "drums", "bass", "keyboard"];
                for (var tab in tabs) {
                    tab = tabs[tab];
                    $('.' + tab + "-upgrade").css('display', (tab == what) ? "block" : "none");
                }
            },
            toggleTab: function(what, enable) {
                if (enable)
                    $('#' + what + "-tab").css('background-color', '#3a3a3a');
                else
                    $('#' + what + "-tab").css('background-color', '');
            },
            selectedTab: 'singer'
        }
    };
    return toReturn;
}
var game = newGame();