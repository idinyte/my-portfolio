import CSS from "../styles/tetris.module.css";
import { useState, useEffect, useRef } from "react";
import soundtrack from "../resources/soundtrack/tetris.mp3";
import { ReactComponent as PlayIcon } from "../resources/svg/play.svg";

export const Tetris = () => {
  const [currentState, setCurrentState] = useState<number>(0);
  const [currentControl, setCurrentControl] = useState<string | null>(null);

  const NewGame = () => {
    let constrain = 10;
    const [mouseOverContainer, setMouseOverContainer] = useState(
      document.getElementById("ex1")
    );
    const [ex1Layer, setEx1Layer] = useState(
      document.getElementById("ex1-layer")
    );

    function transforms(x: number, y: number, el: HTMLElement) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;

      return (
        " rotateX(" +
        calcX +
        "deg) " +
        "rotateY(" +
        calcY +
        "deg) " +
        "scale3d( 0.5, 0.5, 0.5 )"
      );
    }

    function brightnesses(x: number, y: number, el: HTMLElement) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - box.height / 2) / constrain;
      let calcY = (x - box.x - box.width / 2) / constrain;

      let someLightNumber = (1 / Math.sqrt(calcX * calcX + calcY * calcY)) * 20;
      let sigmoid = 1 / (1 + Math.exp(-someLightNumber));
      return `brightness( ${sigmoid} )`;
    }

    function transformElement(el: HTMLElement, xyEl: any) {
      el.style.transform = transforms.apply(null, xyEl);
      let planes = Array.from(
        document.getElementsByClassName(
          CSS.plane
        ) as HTMLCollectionOf<HTMLElement>
      );
      planes.forEach(
        (el, _) =>
          (el.style.filter = brightnesses.apply(null, [xyEl[0], xyEl[1], el]))
      );
    }
    useEffect(() => {
      setMouseOverContainer(document.getElementById("ex1"));
      setEx1Layer(document.getElementById("ex1-layer"));
    }, []);

    if (mouseOverContainer && ex1Layer) {
      mouseOverContainer.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = [...xy, ex1Layer];

        window.requestAnimationFrame(function () {
          transformElement(ex1Layer!!, position);
        });
      };
    }

    return (
      <div className={CSS.screenOne} id="ex1">
        <div className={CSS.stage}>
          <div
            className={CSS.cube}
            id="ex1-layer"
            style={{ transform: "scale3d(0.5, 0.5, 0.5)" }}
          >
            <figure className={`${CSS.plane} ${CSS.back}`}></figure>
            <figure className={`${CSS.plane} ${CSS.top}`}></figure>
            <figure className={`${CSS.plane} ${CSS.bottom}`}></figure>
            <figure className={`${CSS.plane} ${CSS.left}`}></figure>
            <figure className={`${CSS.plane} ${CSS.right}`}></figure>
            <figure className={`${CSS.plane} ${CSS.front}`}></figure>
            <div
              className={CSS.cube}
              style={{ transform: "scale3d(0.33, 1, 1) translateY( -100px )" }}
            >
              <figure className={`${CSS.plane} ${CSS.back}`}></figure>
              <figure className={`${CSS.plane} ${CSS.top}`}></figure>
              <figure className={`${CSS.plane} ${CSS.bottom}`}></figure>
              <figure className={`${CSS.plane} ${CSS.left}`}></figure>
              <figure className={`${CSS.plane} ${CSS.right}`}></figure>
              <figure className={`${CSS.plane} ${CSS.front}`}></figure>
            </div>
          </div>
        </div>
        <div className={CSS.newGame}>
          <PlayIcon
            onClick={() => setCurrentState(1)}
            className={`${CSS.playButton}`}
          ></PlayIcon>
        </div>
        <div className={CSS.instructions}>
          <div>
            <img className={CSS.A} alt="Left control"></img>
            <img
              className={CSS.leftControl}
              alt="Alternativel left control"
            ></img>
            <p>Left</p>
          </div>
          <div>
            <img className={CSS.D} alt="Right control"></img>
            <img
              className={CSS.rightControl}
              alt="Alternativel right control"
            ></img>
            <p>Right</p>
          </div>
          <div>
            <img className={CSS.R} alt="Rotate control"></img>
            <img className={CSS.shift} alt="Alternativel rotate control"></img>
            <p>Rotate</p>
          </div>
          <div>
            <img className={CSS.S} alt="Drop control"></img>
            <img className={CSS.T} alt="Alternativel drop control"></img>
            <p>Drop</p>
          </div>
        </div>
      </div>
    );
  };

  const Ingame = () => {
    const [pixels, setPixels] = useState(
      Array.from({ length: 160 }, (_, index) => (
        <div key={index} className={CSS.square}></div>
      ))
    );

    const Shapes: { [key: number]: [number[], string] } = {
      0: [[3 - 20, 4 - 20, 5 - 20, 6 - 20], "#00f0ef"],
      1: [[5 - 20, 6 - 20, 14 - 20, 15 - 20], "#01f000"],
      2: [[4 - 20, 5 - 20, 15 - 20, 16 - 20], "#f00001"],
      3: [[4 - 20, 5 - 20, 14 - 20, 15 - 20], "#f1f000"],
      4: [[4 - 20, 5 - 20, 6 - 20, 15 - 20], "#9f00f0"],
      5: [[4 - 20, 5 - 20, 6 - 20, 14 - 20], "#f0a100"],
      6: [[4 - 20, 5 - 20, 6 - 20, 16 - 20], "#0000f0"],
    };

    const RotationPatterns: { [key: number]: Array<number[]> } = {
      0: [[22, 11, 0, -11]],
      1: [[0, -11, -8, 1]],
      2: [[11, 0, -9, -20]],
      3: [],
      4: [
        [11, 0, -11, -9],
        [-9, 0, 9, -11],
        [-11, 0, 11, 9],
        [9, 0, -9, 11],
      ],
      5: [
        [11, 0, -11, 2],
        [-9, 0, 9, -20],
        [-11, 0, 11, -2],
        [9, 0, -9, 20],
      ],
      6: [
        [11, 0, -11, -20],
        [-9, 0, 9, -2],
        [-11, 0, 11, 20],
        [9, 0, -9, 2],
      ],
    };

    const frameUpdateTime = useRef<number>(1000);

    const currentShape = useRef<[number[], string]>([
      ...Shapes[Math.floor(Math.random() * 7)],
    ]);
    const placedShapes = useRef<Array<[number[], string]>>([]);
    const downPressManual = useRef<boolean>(false);
    const rotationState = useRef<number>(0);
    const currentScore = useRef<number>(0);

    const findStringByNumber = (numberToFind: number) => {
      for (let i = 0; i < placedShapes.current.length; i++) {
        const [numbers, string] = placedShapes.current[i];
        if (numbers.includes(numberToFind)) {
          return string;
        }
      }

      return "black";
    };

    const Render = () => {
      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      setPixels((prevPixels) => {
        const newPixels = prevPixels.map((_, index) => {
          if (occupiedSquares.includes(index)) {
            return (
              <div
                key={index}
                className={CSS.square}
                style={{
                  backgroundColor: findStringByNumber(index),
                  border: "4px solid",
                  borderImage:
                    "linear-gradient( 135deg, rgb(255, 255, 255, 0.4) 0 50%, rgb(50, 50, 50, 0.3) 50% 100% ) 1",
                }}
              ></div>
            );
          }

          if (currentShape != null && currentShape.current[0].includes(index)) {
            return (
              <div
                key={index}
                className={CSS.square}
                style={{
                  backgroundColor: currentShape.current[1],
                  border: "4px solid",
                  borderImage:
                    "linear-gradient( 135deg, rgb(255, 255, 255, 0.4) 0 50%, rgb(50, 50, 50, 0.3) 50% 100% ) 1",
                }}
              ></div>
            );
          }

          return <div key={index} className={CSS.square}></div>;
        });

        return newPixels;
      });
    };

    const Right = () => {
      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      if (
        currentShape.current[0].every(
          (element) =>
            !occupiedSquares.includes(element + 1) && (element + 1) % 10 !== 0
        )
      ) {
        currentShape.current[0] = currentShape.current[0].map((x) => x + 1);
        Render();
      }
    };

    const Left = () => {
      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      if (
        currentShape.current[0].every(
          (element) =>
            !occupiedSquares.includes(element - 1) && element % 10 !== 0
        )
      ) {
        currentShape.current[0] = currentShape.current[0].map((x) => x - 1);
        Render();
      }
    };

    const DidRotate = (
      temp: [number[], string] | null,
      specialCaseFailed: boolean = false
    ) => {
      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      if (
        temp !== null &&
        !specialCaseFailed &&
        temp[0].every((x) => x < 160 && !occupiedSquares.includes(x))
      ) {
        currentShape.current = temp;
        Render();
        return true;
      }

      return false;
    };

    const Rotate = () => {
      let temp: [number[], string] | null = [...currentShape.current];
      let specialCaseFailed = false;
      switch (currentShape.current[1]) {
        case "#00f0ef": {
          if (rotationState.current === 0) {
            temp[0] = temp[0].map((x, i) => x + RotationPatterns[0][0][i]);
            if (DidRotate(temp)) rotationState.current = 1;
          } else {
            temp[0] = temp[0].map((x, i) => x - RotationPatterns[0][0][i]);
            // prevents going through walls
            specialCaseFailed =
              currentShape.current[0][3] % 10 === 0 ||
              currentShape.current[0][3] % 10 === 1 ||
              currentShape.current[0][3] % 10 === 9;
            if (DidRotate(temp, specialCaseFailed)) rotationState.current = 0;
          }
          break;
        }
        case "#01f000": {
          if (rotationState.current === 0) {
            temp[0] = temp[0].map((x, i) => x + RotationPatterns[1][0][i]);
            if (DidRotate(temp)) rotationState.current = 1;
          } else if (rotationState.current === 1) {
            temp[0] = temp[0].map((x, i) => x - RotationPatterns[1][0][i]);
            specialCaseFailed = currentShape.current[0][0] % 10 === 0;
            if (DidRotate(temp, specialCaseFailed)) rotationState.current = 0;
          }
          break;
        }
        case "#f00001": {
          if (rotationState.current === 0) {
            temp[0] = temp[0].map((x, i) => x + RotationPatterns[2][0][i]);
            if (DidRotate(temp)) rotationState.current = 1;
          } else if (rotationState.current === 1) {
            temp[0] = temp[0].map((x, i) => x - RotationPatterns[2][0][i]);
            specialCaseFailed = currentShape.current[0][0] % 10 === 0;
            if (DidRotate(temp, specialCaseFailed)) rotationState.current = 0;
          }
          break;
        }
        case "#9f00f0": {
          temp[0] = temp[0].map(
            (x, i) => x + RotationPatterns[4][rotationState.current][i]
          );
          if (rotationState.current === 1)
            specialCaseFailed = currentShape.current[0][0] % 10 === 0;
          else if (rotationState.current === 3)
            specialCaseFailed = currentShape.current[0][2] % 10 === 9;
          if (DidRotate(temp, specialCaseFailed)) {
            rotationState.current = (rotationState.current + 1) % 4;
          }
          break;
        }
        case "#f0a100": {
          temp[0] = temp[0].map(
            (x, i) => x + RotationPatterns[5][rotationState.current][i]
          );
          if (rotationState.current === 1)
            specialCaseFailed = currentShape.current[0][0] % 10 === 0;
          else if (rotationState.current === 3)
            specialCaseFailed = currentShape.current[0][2] % 10 === 9;
          if (DidRotate(temp, specialCaseFailed)) {
            rotationState.current = (rotationState.current + 1) % 4;
          }
          break;
        }
        case "#0000f0": {
          temp[0] = temp[0].map(
            (x, i) => x + RotationPatterns[6][rotationState.current][i]
          );
          if (rotationState.current === 1)
            specialCaseFailed = currentShape.current[0][0] % 10 === 0;
          else if (rotationState.current === 3)
            specialCaseFailed = currentShape.current[0][2] % 10 === 9;
          if (DidRotate(temp, specialCaseFailed)) {
            rotationState.current = (rotationState.current + 1) % 4;
          }
          break;
        }
      }
    };

    const DownManual = () => {
      if (downPressManual.current) return;

      downPressManual.current = true;

      const interval = setInterval(() => {
        if (Down(false) === false) {
          clearInterval(interval);
          downPressManual.current = false;
        }
      }, 50);
    };

    const Down = (isAutomatic = true) => {
      if (isAutomatic && downPressManual.current) return;
      frameUpdateTime.current =
        frameUpdateTime.current > 500
          ? Math.max(frameUpdateTime.current - 1, 150)
          : Math.max(frameUpdateTime.current - Math.round(Math.random()), 150);
      console.log(songSpeed);

      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      if (
        currentShape.current[0].every(
          (element) =>
            element + 10 < 160 && !occupiedSquares.includes(element + 10)
        )
      ) {
        currentShape.current[0] = currentShape.current[0].map((x) => x + 10);
        Render();
        return true;
      } else {
        // if game over
        if (!currentShape.current[0].every((element) => element >= 0)) {
          if (HighScore.current < currentScore.current) {
            newHighScore.current = true;
            localStorage.setItem("HighScore", currentScore.current.toString());
          }
          setCurrentState(2); // game over
        }

        placedShapes.current.push(currentShape.current);
        DestroyRows();
        currentShape.current = [...Shapes[Math.floor(Math.random() * 7)]];
        rotationState.current = 0;
        return false;
      }
    };

    const rowsDestroyed = useRef<number>(0);
    const DestroyRows = () => {
      const occupiedSquares = placedShapes.current.flatMap(
        ([numbers, _]) => numbers
      );
      rowsDestroyed.current = 0;
      for (let i = 0; i < 160; i += 10) {
        for (let j = i; j < i + 10; j += 1) {
          if (occupiedSquares.includes(j)) {
            if (j % 10 === 9) {
              let temp: [number[], string][] = placedShapes.current.map(
                ([num_arr, color]) => [
                  num_arr.filter((x) => x < i || x >= i + 10),
                  color,
                ]
              );
              temp = temp.map(([num_arr, color]) => [
                num_arr.map((x) => (x < i ? x + 10 : x)),
                color,
              ]);
              placedShapes.current = temp;
              rowsDestroyed.current = rowsDestroyed.current + 1;
              console.log(songSpeed);
              currentScore.current = Math.round(
                rowsDestroyed.current *
                  1000 *
                  (1.25 - frameUpdateTime.current / 2000) +
                  currentScore.current
              );
            }
          } else {
            break;
          }
        }
      }
    };
    const HighScore = useRef<number>(
      localStorage.getItem("HighScore") !== null
        ? parseInt(localStorage.getItem("HighScore")!!)
        : 0
    );

    const [themeSong, setThemeSong] = useState(
      document.getElementById("theme-song")
    );

    const [songSpeed, setSongSpeed] = useState(
      1.25 - frameUpdateTime.current / 2000
    );

    useEffect(() => {
      const down = setInterval(Down, frameUpdateTime.current);
      setSongSpeed(1.25 - frameUpdateTime.current / 2000);
      return () => clearInterval(down);
    }, [frameUpdateTime.current]);

    useEffect(() => {
      const handleKeyDown = (event: any) => {
        if (event.key === "a" || event.keyCode === 37) {
          Left();
        } else if (event.key === "d" || event.keyCode === 39) {
          Right();
        } else if (event.key === "s" || event.key === "t") {
          DownManual();
        } else if (event.key === "Shift" || event.key === "r") {
          Rotate();
        }
      };

      setThemeSong(document.getElementById("theme-song"));
      setSongSpeed(0.75);

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    if (themeSong instanceof HTMLMediaElement) {
      themeSong.playbackRate = songSpeed;
    }

    return (
      <div className={CSS.horizontalContainer}>
        <audio autoPlay loop id="theme-song">
          <source src={soundtrack} type="audio/mp3"></source>
        </audio>
        <p className={`${CSS.pixeled} ${CSS.largeOnly}`}>
          {" "}
          Score:
          <br /> {currentScore.current}
        </p>
        <div className={CSS.screenTwo}>
          <div className={CSS.inGame}>{pixels}</div>
          <div className={CSS.buttonsBefore}>
            <div className={CSS.buttons}>
              <span
                onClick={Left}
                className={`material-symbols-outlined ${CSS.controlButton}`}
              >
                arrow_back
              </span>
              <span
                onClick={Right}
                className={`material-symbols-outlined ${CSS.controlButton}`}
              >
                arrow_forward
              </span>
              <span
                onClick={Rotate}
                className={`material-symbols-outlined ${CSS.controlButton}`}
              >
                rotate_90_degrees_ccw
              </span>
              <span
                onClick={DownManual}
                className={`material-symbols-outlined ${CSS.controlButton}`}
              >
                arrow_downward
              </span>
            </div>
          </div>
        </div>
        <p className={`${CSS.pixeled} ${CSS.yellow} ${CSS.largeOnly}`}>
          {" "}
          High score:
          <br /> {HighScore.current}
        </p>
      </div>
    );
  };

  const newHighScore = useRef<boolean>(false);

  const GameOver = () => {
    return (
      <div className={CSS.screenThree}>
        <div className={`${CSS.newGame} ${CSS.spaceAround}`}>
          {newHighScore.current ? (
            <h1 className={CSS.newHighScore}>
              New High Score: <br />{" "}
              {parseInt(localStorage.getItem("HighScore")!!)}
            </h1>
          ) : (
            <h1 className={CSS.gameOver}>Game Over</h1>
          )}
          <span
            onClick={() => {
              newHighScore.current = false;
              setCurrentState(1);
            }}
            className={`material-symbols-outlined ${CSS.rePlayButton}`}
          >
            replay
          </span>
        </div>
      </div>
    );
  };

  const stateMachine: { [key: number]: React.ComponentType } = {
    0: NewGame,
    1: Ingame,
    2: GameOver,
  };

  const CurrentStateComponent = stateMachine[currentState];

  return (
    <div className={CSS.container} id="tetris">
      {stateMachine[currentState] && <CurrentStateComponent />}
    </div>
  );
};
