<script>
  import Subheader from "../../lib/Subheader.svelte";

  let pageTitle = "Digital tools in Recruitment and Talent Attraction";
</script>

<svelte:head><title>{pageTitle} • Mtt</title></svelte:head>
<div class="main">
  <Subheader {pageTitle} />
  <div class="card-container">
    <div class="card">
      <h1 class="title">Video screening</h1>
      <div class="content">
        <ul>
          <li>Interview scheduling and reminders</li>
          <li>Panel interviews</li>
          <li>Flexible question formats</li>
          <li>Recording sharing and collaboration</li>
          <li>Data-driven hiring decisions</li>
          <li>Automated Transcription</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <h1 class="title">Applicant tracking system</h1>
      <div class="content">
        <ul>
          <li>Easily compare candidates to make faster decisions</li>
          <li>Know more about your candidates</li>
          <li>Keep all interview data in one place</li>
          <li>Measure your hiring success and improve</li>
        </ul>
      </div>
    </div>
    <div class="card">
      <h1 class="title">Advanced Job Board</h1>
      <div class="content">
        <ul>
          <li>Accept applications via mobile, web or Google Assistant</li>
          <li>Customize look and feel</li>
          <li>Advertise on 3rd party sites</li>
          <li>Automate pre-screening</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="video-card">
    <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/98uKlKvIiOk"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  </div>
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    .card-container {
      justify-content: center;
    }
    .video-card {
      margin: 0 auto;
    }
    iframe {
    width: 300px;
    height: 200px;
  }
  }
  .card {
    width: 300px;
    text-align: left;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background-color: #373737;
  }
  .card ul {
    line-height: 32px;
    list-style: disc;
  }
  h1 {
    font-size: 2rem;
    line-height: 36px;
    font-weight: 600;
  }
  .card .content {
    line-height: 24px;
  }
  .video-card {
    border-radius: 10px;
    padding: 2rem;
    background-color: #373737;
    width: fit-content;
    margin-top: 1rem;
  }
</style>
