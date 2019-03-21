<template>
    <div id="tool">


      <!-- content srart -->
      <div class="am-g am-g-fixed blog-fixed blog-content">
        <figure data-am-widget="figure" class="am am-figure am-figure-default "   data-am-figure="{  pureview: 'true' }">
          <div id="container">
            <div><img src="/static/images/01.jpg"><h3>Agfa</h3></div>
            <div><img src="/static/images/02.jpg"><h3>Auto</h3></div>
            <div><img src="/static/images/03.jpg"><h3>Bald eagle</h3></div>
            <div><img src="/static/images/04.jpg"><h3>Black swan</h3></div>
            <div><img src="/static/images/05.jpg"><h3>Book shelf</h3></div>
            <div><img src="/static/images/06.jpg"><h3>Camera</h3></div>
            <div><img src="/static/images/07.jpg"><h3>Camera</h3></div>
            <div><img src="/static/images/25.jpg"><h3>Vintage camera</h3></div>
            <div><img src="/static/images/09.jpg"><h3>Coffee</h3></div>
            <div><img src="/static/images/10.jpg"><h3>Cookies</h3></div>
            <div><img src="/static/images/11.jpg"><h3>Cubes</h3></div>
            <div><img src="/static/images/12.jpg"><h3>DJ</h3></div>
            <div><img src="/static/images/13.jpg"><h3>Doors</h3></div>
            <div><img src="/static/images/14.jpg"><h3>Matchbox</h3></div>
            <div><img src="/static/images/15.jpg"><h3>Freiburg</h3></div>
            <div><img src="/static/images/16.jpg"><h3>Henna</h3></div>

          </div>
        </figure>

      </div>
      <!-- content end -->

    </div>
</template>



<script>
  // import '../../../static/js/pinto.min.js';
  // import '../../../static/js/img.js';
    export default {
        name: "Tool",
        data(){
          return {

          }
        },
      created(){

      },
      mounted(){
        this.initJS()
      },
      methods:{
        initJS(){
          $(function(){
            $('#container').pinto();
          });

          (function (m) {
            var u = {
              itemSelector: "> div",
              itemWidth: 220,
              marginX: 10,
              marginY: 10,
              align: "left",
              fitWidth: !0,
              animate: !0,
              autoResize: !0,
              resizeDelay: 50
            };
            m.fn.pinto = function (g) {
              var e = m(this), a = m.extend(u, g);
              e.css("position", "relative");
              var r = function () {
                if (e.is(":visible")) {
                  for (var g = a.animate ? "top 0.5s, left 0.5s" : "none", b = e.find(a.itemSelector), p = e.innerWidth(), l = parseInt(a.marginX || 0), q = parseInt(a.marginY || 0), f = a.itemWidth, c = Math.max(Math.floor(p / (f + l)), 1), d = [], h = c; h--;) d.push(0);
                  var n = 0;
                  a.fitWidth ? f += Math.floor(.5 +
                    (p - c * (f + l)) / c) : "center" === a.align ? n += Math.floor(.5 + (p - c * (f + l)) >> 1) : "right" === a.align && (n += Math.floor(.5 + p - c * (f + l)));
                  b.each(function (a, e) {
                    var c = m(e), k;
                    k = 0;
                    for (var b = 1, h = d.length; b < h; b++) d[b] < d[k] && (k = b);
                    c.css({
                      position: "absolute",
                      top: d[k] + q / 2 + "px",
                      left: (f + l) * k + n + "px",
                      width: f,
                      margin: q / 2 + "px " + l / 2 + "px",
                      transition: g
                    });
                    d[k] += c.innerHeight() + q
                  });
                  b = 0;
                  for (h = c; h--;) d[h] > b && (b = d[h]);
                  e.css({height: b})
                }
              }, t = null;
              g = function () {
                clearTimeout(t);
                t = setTimeout(r, a.resizeDelay)
              };
              r();
              a.autoResize && (g = m(window).on("resize",
                g), e.on("remove", g.unbind))
            }
          })(window.jQuery);


        }

      },
      components:{

      }
    }
</script>

<style scoped>


</style>
