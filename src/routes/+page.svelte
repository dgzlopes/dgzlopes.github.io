<script lang="ts">
  import me from "$lib/assets/nurbur.png";
  import bread from "$lib/assets/bread2.png";
  import profile from "$lib/assets/profile.png";
</script>

<div class="bg-opacity-80">
  <div class="flex flex-col justify-center items-center">
    <div
      class="flex flex-col justify-center items-center bg-gray-50 w-full border-b"
    >
      <div class="px-4 sm:px-16 w-full md:w-[700px] mt-20 mb-8">
        <img
          src={profile}
          alt="profile"
          class="w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full border border-titan-100 shadow-lg shadow-titan-300"
        />
        <h1 class="text-3xl sm:text-5xl font-bold text-gray-800">
          Daniel González Lopes
        </h1>
        <hr
          class="w-[200px] md:w-[600px] mt-2 mb-4 border-dashed"
        />
        <p class="text-xl sm:text-2xl font-medium text-gray-700 mt-2">
          Staff Software Engineer at <a
            href="https://grafana.com/"
            class="font-medium text-titan-500 hover:text-titan-600"
            >Grafana Labs</a
          >
        </p>
        <p class="text-sm sm:text-base mt-1 text-gray-700">
          Wanna chat? Hit me up on
          <a href="https://github.com/dgzlopes" class="underline">GitHub</a> or
          <a
            href="https://linkedin.com/in/danielgonzalezlopes"
            class="underline">LinkedIn</a
          >, or danielgonzalezlopes at gmail
        </p>
      </div>
    </div>

    <div class="px-4 sm:px-16 mt-8 w-full md:w-[700px]">
      <div>
        <h2 class="text-lg sm:text-xl font-bold text-gray-800 mt-3">What I do</h2>
        <ul class="list-disc list-inside text-base text-gray-700 mt-2">
          <li>
            I love designing, building, and growing great products.
          </li>
          <li>
            Hands-on with all things Product, Engineering, and how they relate to GTM.
          </li>
          <li>
            Focus areas: Observability, Reliability, DevTools, InternalTools,
            and OSS.
          </li>
        </ul>

        <h2 class="text-lg sm:text-xl font-bold text-gray-800 mt-6">
          After work
        </h2>
        <ul class="list-disc list-inside text-base text-gray-700 mt-2">
          <li>
            Into motorcycling, rock climbing, tabletop games, and skiing.
          </li>
          <li>Lately, I’ve been getting more and more into cooking.</li>
        </ul>

        <h2 class="text-lg sm:text-xl font-bold text-gray-800 mt-6">
          Side projects
        </h2>
        <ul class="list-disc list-inside text-base text-gray-700 mt-2">
          <li>
            <a
              href="https://stackerjs.com/"
              class="font-medium text-titan-500 hover:text-titan-600"
              >Stacker</a
            >: SaaS that helps you get your GitHub notifications under control.
          </li>
          <li>
            <a
              href="https://racereplay.gonzalezlopes.com/"
              class="font-medium text-titan-500 hover:text-titan-600"
              >RaceReplay</a
            >: Replay your track day laps recorded with RaceBox.
          </li>
          <li>
            <a
              href="https://github.com/dgzlopes/hledger-tools"
              class="font-medium text-titan-500 hover:text-titan-600"
              >hledger-tools</a
            >: Open-source tools for managing your finances with hledger.
          </li>
          <li>
            <a
              href="https://github.com/dgzlopes/install-k6"
              class="font-medium text-titan-500 hover:text-titan-600"
              >install-k6</a
            >: A nicer way to install Grafana k6.
          </li>
          <li>
            And many smaller ones like <a
              href="https://quarters.gonzalezlopes.com/"
              class="font-medium text-titan-500 hover:text-titan-600"
              >quarters</a
            > and <a 
              href="https://planner.gonzalezlopes.com/"
              class="font-medium text-titan-500 hover:text-titan-600"
              >planner</a
            >.
          </li>
        </ul>
      </div>
    </div>

    <div class="px-4 sm:px-16 mt-14 mb-8 w-full sm:w-[540px] md:w-[700px]">
      <div class="flex justify-between">
        <div
          class="bg-titan-100 bg-opacity-80 border-b border-titan-100 shadow-lg shadow-titan-200 hover:shadow-2xl hover:shadow-titan-100 pt-7 px-5 pb-20 rounded-md w-full sm:w-6/12 h-auto -rotate-2 mt-2"
        >
          <img
            src={me}
            alt="me"
            class="w-full h-auto rounded-md border border-titan-100 shadow-2xl shadow-titan-100"
          />
        </div>

        <div
          class="bg-yellow-100 bg-opacity-90 sm:ml-3 border-b border-yellow-100 shadow-lg hover:shadow-2xl hover:shadow-yellow-100 shadow-yellow-200 pt-7 px-5 pb-20 rounded-md w-full sm:w-6/12 h-auto mt-2 rotate-3"
        >
          <img
            src={bread}
            alt="bread"
            class="w-full h-auto rounded-md border border-yellow-100 shadow-2xl shadow-yellow-100"
          />
        </div>
      </div>
      <p class="text-xs text-gray-600 mt-6 mb-4 ml-2 text-center italic">
        ↑ At the Nürburgring // Baking some bread ↑
      </p>
    </div>
  </div>
</div>

<footer class="flex justify-center items-center h-16 bg-gray-50 border-t">
  <p class="text-xs sm:text-sm text-gray-600">
    © {new Date().getFullYear()} Daniel González Lopes
  </p>
</footer>
